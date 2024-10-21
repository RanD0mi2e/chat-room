import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { AvatarWithHightLight } from "@/components/Avatar/Avatar";
import SmileIcon from "@/images/smile.jpg"
import { useState } from "react";

// 面板首页
export default function Dashboard() {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    setSelected((val) => !val)
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <AvatarWithHightLight src={SmileIcon} isSelected={selected} size={50} onClick={() => handleClick()} />
      </aside>
      <div className={styles["action-bar"]}></div>
      <main className={styles.content}>
        {/* <Outlet></Outlet> */}
      </main>
    </div>
  );
}
