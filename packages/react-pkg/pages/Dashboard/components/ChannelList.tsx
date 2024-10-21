import { AvatarWithHightLight } from "@/components/Avatar/Avatar";
import SmileIcon from "@/images/smile.jpg";
import { useEffect, useState } from "react";

interface ChannelProps {
  id: string;
  name: string;
  selected?: boolean;
}

export function ChannelList() {
  const [selectedItemId, setSelectedItemId] = useState({})
  const [list, setList] = useState<ChannelProps[]>([]);

  const handleSelected = (id: string) => {
    setSelectedItemId(id)
    console.log('change', id)
  };

  useEffect(() => {
    let ignore = false;
    
    // TODO: replace MockData
    setTimeout(() => {
      if (ignore) {
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
        ]
        setList(mockData)
      }
    }, 200);

    return () => {
      ignore = true;
    };
  });

  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <AvatarWithHightLight
            src={SmileIcon}
            isSelected={item.id === selectedItemId}
            size={50}
            onClick={() => handleSelected(item.id)}
          />
        </div>
      ))}
    </>
  );
}
