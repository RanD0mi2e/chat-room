import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect, useState } from "react";
import { ChannelList } from "./components/ChannelList/ChannelList";
import { ThemeContext } from "@/Contexts/ThemeContext";
import { AvatarWithHightLight } from "@/components/Avatar/Avatar";
import { UserContext } from "@/Contexts/UserContext";
import SmileIcon from "@/images/smile.jpg";

type SeverInfo = {
  servername: string;
};

// 面板首页
export default function Dashboard() {
  const { theme } = useContext(ThemeContext)!;
  const { userState, updateUserState } = useContext(UserContext)!;
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [channelTitle, setChannelTitle] = useState("");
  const handleChannelTitle = (newTitle: string) => {
    setChannelTitle(newTitle);
  };

  const handleSelectChannel = (id: string) => {
    updateUserState({ selectedChannel: id });
    navigate('/profile')
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <div>
          <AvatarWithHightLight
            isSelected={userState.selectedChannel === "me"}
            size={50}
            src={SmileIcon}
            onClick={() => handleSelectChannel('me')}
          />
        </div>
        <ChannelList
          isShowAddIcon={true}
          onChangeChannel={handleChannelTitle}
        />
      </aside>
      <main className={styles.main}>
        <Outlet
          context={{ servername: channelTitle } satisfies SeverInfo}
        ></Outlet>
      </main>
    </div>
  );
}

// hook
export const useServerInfo = () => {
  return useOutletContext<SeverInfo>();
};
