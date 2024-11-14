import { ThemeContext } from "@/Contexts/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web";
import darkmodeAnimationData from "./darkMode-lottie.json";

export function ToggleThemeButton({
  width = 200,
  height = 100,
}: {
  width: number;
  height: number;
}) {
  const { toggleTheme } = useContext(ThemeContext)!;
  const [animation, setAnimation] = useState<AnimationItem | null>(null);
  // TODO 根据全局的dark变量判断是否是暗黑模式
  const [isDark, setIsDark] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const darkStartFrame = 30;
  const darkEndFrame = 230;
  const lightStartFrame = 290;
  const lightEndFrame = 460;

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current!,
      animationData: darkmodeAnimationData,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });
    anim.playSpeed = 3;

    if (isDark) {
      anim.goToAndStop(lightStartFrame, true);
    } else {
      anim.goToAndStop(darkStartFrame, true);
    }

    setAnimation(anim);

    // 清理动画实例
    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  // 切换dark | light
  const handleModeToggle = () => {
    if (!animation) return;

    if (isDark) {
      // dark ——> light
      animation.playSegments([lightStartFrame, lightEndFrame], true);
      setIsDark(false);
    } else {
      // light ——> dark
      animation.playSegments([darkStartFrame, darkEndFrame], true);
      setIsDark(true);
    }
    toggleTheme();
  };

  return (
    <div
      ref={containerRef}
      onClick={handleModeToggle}
      style={{ width: width, height: height }}
    ></div>
  );
}
