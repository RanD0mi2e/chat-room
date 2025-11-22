import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect, useState } from "react";
import { ChannelList } from "./components/ChannelList";
import { ThemeContext } from "@/Contexts/ThemeContext";
import { ToggleThemeButton } from "@/components/ToggleThemeButton/ToggleThemeButton";

// 面板首页
export default function Dashboard() {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <ChannelList isShowAddIcon={true} />
      </aside>
      <main className={styles.main}>
        <div className={styles.tips}></div>
        <div className={styles["action-bar"]}></div>
        <div className={styles.content}>
          <ToggleThemeButton />
          <button
            onClick={() => navigate('/login')}
            className={styles.returnButton}
          >
            Go to Login
          </button>
        </div>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
