import DefaultUserIcon from "@/images/iconTsx/DefaultUserIcon";
import styles from "./Avatar.module.css";
import AddIcon from "@/images/svg/add.svg?react";
import { ReactNode } from "react";

interface AvatarProps {
  src?: string;
  isSelected: boolean; // 是否有选中效果
  size: number;
  onClick: () => void;
}

// 头像组件
export function Avatar({ src, size = 40, isSelected, onClick }: AvatarProps) {
  return (
    <>
      {src ? (
        <img
          src={src}
          style={{ width: size, height: size }}
          className={`${styles.avatar} ${isSelected ? styles.selected : ""}`}
          onClick={onClick}
        />
      ) : (
        <DefaultAvatar size={size} isSelected={isSelected} onClick={onClick} />
      )}
    </>
  );
}

// 默认头像组件
function DefaultAvatar({
  size = 40,
  isSelected,
  onClick,
}: {
  size?: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`${styles["default-img"]} ${styles.avatar} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={onClick}
    >
      <DefaultUserIcon />
    </div>
  );
}

// 加号
export function PlusAvatar({ size = 40, onClick }: AvatarProps) {
  return (
    <>
      <div
        style={{ width: size, height: size }}
        className={`${styles["avatar"]} ${styles["plus-img"]}`}
        onClick={onClick}
      >
        <AddIcon className={styles["add-icon"]} />
      </div>
    </>
  );
}

// 带选中动画头像组件
export function AvatarWithHightLight({
  children,
  size = 40,
  isSelected,
}: {
  children?: ReactNode;
  size: number;
  isSelected: boolean;
}) {
  return (
    <div
      className={`${
        isSelected ? styles["avatar-hl-selected"] : styles["avatar-hl"]
      }`}
    >
      <div className={styles.pill} style={{ height: size + "px" }}>
        <span className={`${styles["pill-item"]}`} />
      </div>
      {children}
      {/* <PlusAvatar src={src} size={size} isSelected={isSelected} onClick={onClick} /> */}
      {/* <Avatar src={src} size={size} isSelected={isSelected} onClick={onClick} /> */}
    </div>
  );
}
