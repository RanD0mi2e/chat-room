import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { AvatarWithHightLight } from "@/components/Avatar/Avatar";
import SmileIcon from "@/images/smile.jpg"
import { useState } from "react";
import { ChannelList } from "./components/ChannelList";

// 面板首页
export default function Dashboard() {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    setSelected((val) => !val)
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <ChannelList />
      </aside>
      <div className={styles["action-bar"]}></div>
      <main className={styles.content}>
        {/* <Outlet></Outlet> */}
      </main>
    </div>
  );
}
