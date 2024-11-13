import SettingSvg from "@/images/svg/setting.svg?react";

type iconProps = Partial<{
  width: string;
  height: string;
  fill: string;
  className: string;
}>;

export default function SettingIcon(props: iconProps) {
  return <SettingSvg {...props} />;
}
