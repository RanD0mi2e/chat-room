import { AvatarWithHightLight } from "@/components/Avatar/Avatar";
import SmileIcon from "@/images/smile.jpg";
import { useEffect, useState } from "react";

import styles from "./ChannelList.module.css";
import { useNavigate } from "react-router-dom";

interface ChannelProps {
  id: string;
  name: string;
  selected?: boolean;
}

export function ChannelList({
  isShowAddIcon = false,
  onChangeChannel
}: {
  isShowAddIcon?: boolean;
  onChangeChannel: (val: string) => void
}) {
  const [selectedItemId, setSelectedItemId] = useState({});
  const [list, setList] = useState<ChannelProps[]>([]);

  // 路由导航
  const navigate = useNavigate()

  const handleSelected = (id: string, name: string) => {
    onChangeChannel(name)
    setSelectedItemId(id);
    navigate(`/channel/${id}`)
    console.log("change", id);
  };

  useEffect(() => {
    let ignore = false;

    // TODO: replace MockData
    setTimeout(() => {
      if (!ignore) {
        console.log('trigger')
        const mockData: ChannelProps[] = [
          {
            id: "001",
            name: "niko",
          },
          {
            id: "002",
            name: "hohi",
          },
          {
            id: "003",
            name: "jenkins",
          },
        ];
        setList(mockData);
      }
    }, 200);

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className={styles["channel-box"]}>
      {list.map((item) => (
        <div key={item.id} className={styles["channel-item"]}>
          <AvatarWithHightLight
            src={SmileIcon}
            isSelected={item.id === selectedItemId}
            size={50}
            onClick={() => handleSelected(item.id, item.name)}
          />
        </div>
      ))}
      {/** 新增 */}
      {isShowAddIcon ? (
        <div className={styles["add-newchannel"]}>
          <AvatarWithHightLight
            isSelected={false}
            size={50}
            onClick={() => {}}
          />
        </div>
      ) : null}
    </div>
  );
}
