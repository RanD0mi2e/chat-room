import { UserContext } from "@/Contexts/UserContext";
import HashTagIcon from "@/images/iconTsx/HashTagIcon";
import IconWrapper from "@/images/iconTsx/IconWrapper";
import SpeakerIcon from "@/images/iconTsx/SpeakerIcon";
import InviteUserSvg from "@/images/svg/inviteUser.svg?react";
import SettingSvg from "@/images/svg/setting.svg?react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

type GroupProps = {
  groupItems: GroupItemProps[];
  groupAriaLabel: string;
  type: string;
};

export type GroupItemProps = {
  key: string;
  label: string;
}

export default function GroupList(props: GroupProps) {
  const userContext = useContext(UserContext)!

  const classNames = {
    wrapper: "py-0",
  };

  const IconRenderer = () => {
    if (props.type === "text") {
      return <HashTagIcon className="-translate-y-[0.5px]" />;
    }
    if (props.type === "audio") {
      return <SpeakerIcon className="-translate-y-[0.5px]" />;
    }
    return null;
  };

  const ActionRenderer = () => {
    return (
      <div className="flex items-center ml-auto">
        <IconWrapper width="1.2em" height="1.2em" className="mr-2">
          <InviteUserSvg />
        </IconWrapper>
        <IconWrapper width="1.2em" height="1.2em">
          <SettingSvg />
        </IconWrapper>
      </div>
    );
  };

  const navigate = useNavigate()

  const HandlerItemClick = (item: GroupItemProps) => {
    console.log(item);
    navigate(`/channel/${userContext.userState.selectedMenu}/${item.key}`)
    userContext.updateUserState({
      selectedChannelType: props.type,
      selectedChannelName: item.label,
      selectedChannel: item.key
    })
  }

  return (
    <div>
      <Listbox items={props.groupItems} aria-label={props.groupAriaLabel}>
        {props.groupItems.map((item) => (
          <ListboxItem
            classNames={classNames}
            textValue={item.key}
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
            onClick={() => HandlerItemClick(item)}
          >
            <div className="flex items-center">
              <IconRenderer />
              <span className="pl-2">{item.label}</span>
              <ActionRenderer />
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
}
