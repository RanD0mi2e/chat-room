import { Outlet } from "react-router-dom";
import ChannelHeader from "./components/ChannelHeader/ChannnelHeader";
import GroupAccordion from "./components/GroupAccordion/GroupAccordion";
import styles from "./Dashboard.module.css";
import { useServerInfo } from "./Dashboard";

export default function ServerPage() {
  const { servername } = useServerInfo();

  return (
    <>
      <div className={styles["action-bar"]}>
        <ChannelHeader title={servername} />
        <GroupAccordion />
      </div>
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
