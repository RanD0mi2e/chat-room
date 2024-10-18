import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { Avatar } from "@/components/Avatar/Avatar";
import SmileIcon from "@/images/smile.jpg"

// 面板首页
export default function Dashboard() {
  const handleClick = (id: string) => {
    return id;
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <Avatar src={SmileIcon} isSelected={true} size={40} onClick={() => handleClick('111')} />
      </aside>
      <div className={styles["action-bar"]}></div>
      <main className={styles.content}>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
