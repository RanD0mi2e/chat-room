import { ToggleThemeButton } from "@/components/ToggleThemeButton/ToggleThemeButton";
import HashTagIcon from "@/images/iconTsx/HashTagIcon";
import IconWrapper from "@/images/iconTsx/IconWrapper";
import { Input } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import SearchSvg from "@/images/svg/search.svg?react";
import { UserContext } from "@/Contexts/UserContext";
import { useContext } from "react";
import { ChatChannel } from "./ChatChannel";
import { VoiceChannel } from "./VoiceChannel";


export function Channel() {
  const userContext = useContext(UserContext)!

  // const { channelId } = useParams<Record<string, string>>();

  const InputIcon = () => {
    return (
      <IconWrapper width="1em" height="1em">
        <SearchSvg />
      </IconWrapper>
    );
  };

  return (
    <div className="text-[var(--channel-icon)]">
      <div
        className={`flex h-10 ledge-shadow items-center justify-between p-2`}
      >
        <div className="flex items-center">
          <div className="flex mr-2">
            <IconWrapper width="1.4em" height="1.4em">
              <HashTagIcon />
            </IconWrapper>
            <span className="ml-2 text-[var(--text-color)]">{userContext.userState.selectedChannelName} 频道</span>
          </div>
        </div>
        <div className="flex items-center">
          <ToggleThemeButton width={60} height={30} />
          <div>
            <Input
              classNames={{
                base: "max-w-full h-full",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 min-h-7",
              }}
              placeholder="请输入..."
              size="sm"
              startContent={<InputIcon />}
              type="search"
            />
          </div>
        </div>
      </div>
      <div>
        {userContext.userState.selectedChannelType == 'text' ? <ChatChannel /> : <VoiceChannel />}
      </div>
    </div>
  );
}
