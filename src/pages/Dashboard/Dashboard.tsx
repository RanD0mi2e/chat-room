import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect } from "react";
import { ChannelList } from "./components/ChannelList";
import { ThemeContext } from "@/Contexts/ThemeContext";

// 面板首页
export default function Dashboard() {
  const { theme } = useContext(ThemeContext)!;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <ChannelList isShowAddIcon={true} />
      </aside>
      <main className={styles.main}>
        <div className={styles["action-bar"]}></div>
        <div className={styles.content}>
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}
