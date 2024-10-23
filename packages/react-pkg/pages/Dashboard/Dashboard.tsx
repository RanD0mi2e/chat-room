import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
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
        <ChannelList isShowAddIcon={true} />
      </aside>
      <main className={styles.main}>
        <div className={styles.tips}></div>
        <div className={styles["action-bar"]}></div>
        <div className={styles.content}></div>
        {/* <Outlet></Outlet> */}
      </main>
    </div>
  );
}
