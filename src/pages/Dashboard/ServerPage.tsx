import { Outlet } from "react-router-dom";
import ChannelHeader from "./components/ChannelHeader/ChannnelHeader";
import GroupAccordion from "./components/GroupAccordion/GroupAccordion";
import styles from "./Dashboard.module.css";
import { useContext } from "react";
import { UserContext } from "@/Contexts/UserContext";

export default function ServerPage() {
  const { userState } = useContext(UserContext)!

  return (
    <>
      <div className={styles["action-bar"]}>
        <ChannelHeader title={userState.selectedMenuName} />
        <GroupAccordion />
      </div>
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
