import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect, useState } from "react";
import {
  ChannelList,
  ChannelProps,
} from "./components/ChannelList/ChannelList";
import { ThemeContext } from "@/Contexts/ThemeContext";
import { UserContext } from "@/Contexts/UserContext";

// 面板首页
export default function Dashboard() {
  const { theme } = useContext(ThemeContext)!;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <ChannelMenuGroup />
      </aside>
      <main className={styles.main}>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

type GroupedMenuType = {
  [k: string]: ChannelProps[];
};

// 侧边分组菜单栏
const ChannelMenuGroup = () => {
  const navigate = useNavigate();
  const { userState, updateUserState } = useContext(UserContext)!;
  const [groupMenu, setGroupMenu] = useState<GroupedMenuType | null>(null);

  const handleSelectChannel = (newId: string, newTitle: string) => {
    // 跳转个人页
    if (newId === "profile") {
      navigate("/profile");
    } else {
      navigate("/channels/" + newId);
    }
    updateUserState({ selectedMenu: newId, selectedMenuName: newTitle });
  };

  useEffect(() => {
    let ignore = false;

    // TODO: replace MockData
    setTimeout(() => {
      if (!ignore) {
        const menuGroupA: ChannelProps[] = [
          {
            id: "profile",
            name: "个人主页",
            iconSrc: "http://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960"
          },
        ];
        const menuGroupB: ChannelProps[] = [
          {
            id: "001",
            name: "niko",
          },
          {
            id: "002",
            name: "hohi",
          },
          {
            id: "003",
            name: "jenkins",
          },
        ];
        setGroupMenu(() => ({
          profile: menuGroupA,
          channel: menuGroupB,
        }));
      }
    }, 200);

    return () => {
      ignore = true;
    };
  }, []);

  return groupMenu ? (
    <>
      {/* 用户相关列表 */}
      <ChannelList
        selectedId={userState.selectedMenu}
        channelArr={groupMenu.profile}
        isShowAddIcon={false}
        onChangeChannel={handleSelectChannel}
      />
      {/* 频道列表 */}
      <ChannelList
        selectedId={userState.selectedMenu}
        channelArr={groupMenu.channel}
        isShowAddIcon={true}
        onChangeChannel={handleSelectChannel}
      />
    </>
  ) : null;
};
