import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
// import { Avatar } from "@/components/Avatar/Avatar";

// 面板首页
export default function Dashboard() {
  const handleClick = (id: string) => {
    return id;
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        {/* <Avatar src="" /> */}
      </aside>
      <div className={styles["action-bar"]}></div>
      <main className={styles.content}>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
