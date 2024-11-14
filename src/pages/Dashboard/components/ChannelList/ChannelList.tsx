import {
  Avatar,
  AvatarWithHightLight,
  PlusAvatar,
} from "@/components/Avatar/Avatar";

import styles from "./ChannelList.module.css";
import { useLocation } from "react-router-dom";

export interface ChannelProps {
  id: string;
  name: string;
  iconSrc?: string;
}

export function ChannelList({
  channelArr,
  selectedId,
  isShowAddIcon = false,
  onChangeChannel,
}: {
  channelArr: ChannelProps[];
  selectedId: string;
  isShowAddIcon?: boolean;
  onChangeChannel: (id: string, name: string) => void;
}) {
  const location = useLocation();
  console.log("location", location);

  const handleSelected = (id: string, name: string) => {
    onChangeChannel(id, name);
  };

  return (
    <div className={styles["channel-box"]}>
      {channelArr.map((item) => (
        <div key={item.id} className={styles["channel-item"]}>
          <AvatarWithHightLight isSelected={item.id === selectedId} size={50}>
            <Avatar
              src={item.iconSrc}
              size={50}
              isSelected={item.id === selectedId}
              onClick={() => handleSelected(item.id, item.name)}
            />
          </AvatarWithHightLight>
        </div>
      ))}
      {/** 新增 */}
      {isShowAddIcon ? (
        <div className={styles["add-newchannel"]}>
          <AvatarWithHightLight isSelected={false} size={50}>
            <PlusAvatar size={50} isSelected={false} onClick={() => {}} />
          </AvatarWithHightLight>
        </div>
      ) : null}
    </div>
  );
}
