import { AvatarWithHightLight } from "@/components/Avatar/Avatar";
import SmileIcon from "@/images/smile.jpg";

interface ChannelProps {
  id: string;
  name: string;
  selected?: boolean;
}

export function ChannelList() {
  // TODO: replace MockData
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

  const mockDataHash = convertListToHash(mockData)

  const handleSelected = (id: string) => {
    if (mockDataHash[id]) {
      mockDataHash[id].selected = true 
    }
  }

  return (
    <ul>
      {mockData.map((item) => (
        <li key={item.id}>
          <AvatarWithHightLight
            src={SmileIcon}
            isSelected={item.selected}
            size={50}
            onClick={() => handleSelected(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

interface ListItem {
  id: string
  [key: string]: any
}

interface ObjectProps {
  [key: string]: ListItem & {selected: boolean}
}

function convertListToHash(list: ListItem[]) {
  let obj: ObjectProps = {}
  list.forEach(item => {
    obj[item.id] = {
      ...item,
      selected: false
    }
  })
  return obj
}
