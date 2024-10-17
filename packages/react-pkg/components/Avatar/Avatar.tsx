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
      className={`${styles.avatar} ${isSelected ? 'selected': ''}`}
      onClick={onClick}
    />
  );
}
