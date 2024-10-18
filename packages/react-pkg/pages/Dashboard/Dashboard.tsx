import { Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { AvatarWithHightLight } from "@/components/Avatar/Avatar";
import SmileIcon from "@/images/smile.jpg"
// import { RoundMatrix } from "@/components/RoundMatrix/RoundMatrix";

// 面板首页
export default function Dashboard() {
  const handleClick = (id: string) => {
    return id;
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <AvatarWithHightLight src={SmileIcon} isSelected={true} size={50} onClick={() => handleClick('111')} />
      </aside>
      <div className={styles["action-bar"]}></div>
      <main className={styles.content}>
        {/* <Outlet></Outlet> */}
      </main>
    </div>
  );
}
