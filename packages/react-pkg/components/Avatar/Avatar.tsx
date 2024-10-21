import { useState } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  isSelected: boolean;
  size: number;
  onClick: () => void;
}

export function Avatar({ src, size = 40, isSelected, onClick }: AvatarProps) {
  return (
    <img
      src={src}
      style={{ width: size, height: size }}
      className={`${styles.avatar} ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    />
  );
}

export function AvatarWithHightLight({
  src,
  size = 40,
  isSelected,
  onClick,
}: AvatarProps) {

  console.log(isSelected)

  return (
    <div
      className={`${isSelected ? styles["avatar-hl-selected"] : styles["avatar-hl"]}`}
    >
      <div className={styles.pill} style={{ height: size + "px" }}>
        <span
          className={`${styles['pill-item']}`}
        />
      </div>
      <Avatar src={src} size={size} isSelected={isSelected} onClick={onClick} />
    </div>
  );
}
