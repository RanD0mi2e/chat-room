import { ToggleThemeButton } from "@/components/ToggleThemeButton/ToggleThemeButton";
import { useParams } from "react-router-dom";

interface RouteParams {
  channelId: string;
}

export function Channel() {
  const { channelId } = useParams<Record<string, string>>();

  return (
    <div>
      <div>{ channelId }</div>
      <ToggleThemeButton  />
    </div>
  );
}