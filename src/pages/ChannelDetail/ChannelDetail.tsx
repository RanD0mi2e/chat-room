import { ToggleThemeButton } from "@/components/ToggleThemeButton/ToggleThemeButton";
import { useParams } from "react-router-dom";

export function Channel() {
  const { channelId } = useParams<Record<string, string>>();

  return (
    <div>
      <div className={`flex h-10 ledge-shadow items-center justify-between p-2`}>
        <div className="flex">
          <div className="mr-2">#</div>
          <div>
            <ToggleThemeButton width={60} height={30} />
          </div>
        </div>
        <div>toolbar</div>
      </div>
      <div>{ channelId }</div>
    </div>
  );
}