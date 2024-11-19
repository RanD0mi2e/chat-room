import { ToggleThemeButton } from "@/components/ToggleThemeButton/ToggleThemeButton";
import HashTagIcon from "@/images/iconTsx/HashTagIcon";
import IconWrapper from "@/images/iconTsx/IconWrapper";
import { useParams } from "react-router-dom";

export function Channel() {
  const { channelId } = useParams<Record<string, string>>();

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
            <span className="ml-2">频道标题</span>
          </div>
        </div>
        <div className="flex items-center">
          <ToggleThemeButton width={60} height={30} />
          toolbar
        </div>
      </div>
      <div>{channelId}</div>
    </div>
  );
}
