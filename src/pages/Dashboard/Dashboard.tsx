import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect, useState } from "react";
import { ChannelList } from "./components/ChannelList/ChannelList";
import { ThemeContext } from "@/Contexts/ThemeContext";
import GroupAccordion from "./components/GroupAccordion/GroupAccordion";
import ChannelHeader from "./components/ChannelHeader/ChannnelHeader";

// 面板首页
export default function Dashboard() {
  const { theme } = useContext(ThemeContext)!;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [channelTitle, setChannelTitle] = useState('')
  const handleChannelTitle = (newTitle: string) => {
    setChannelTitle(newTitle)
  }

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <ChannelList isShowAddIcon={true} onChangeChannel={handleChannelTitle} />
      </aside>
      <main className={styles.main}>
        <div className={styles["action-bar"]}>
          <ChannelHeader title={channelTitle} />
          <GroupAccordion />
        </div>
        <div className={styles.content}>
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}
