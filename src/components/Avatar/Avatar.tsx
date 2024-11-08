import styles from "./Avatar.module.css";
import AddIcon from '@/images/add.svg?react';

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
        <DefaultAvatar size={50} />
      )}
    </>
  );
}

// 默认头像组件
function DefaultAvatar({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={styles["default-img"]}
    >
      <AddIcon className={styles["add-icon"]} />
    </div>
  );
}

// 带选中动画头像组件
export function AvatarWithHightLight({
  src,
  size = 40,
  isSelected,
  onClick,
}: AvatarProps) {
  return (
    <div
      className={`${
        isSelected ? styles["avatar-hl-selected"] : styles["avatar-hl"]
      }`}
    >
      <div className={styles.pill} style={{ height: size + "px" }}>
        <span className={`${styles["pill-item"]}`} />
      </div>
      <Avatar src={src} size={size} isSelected={isSelected} onClick={onClick} />
    </div>
  );
}
