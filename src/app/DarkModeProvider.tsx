"use client";

import useModeStore from "../_store/store";
import style from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function DarkModeProvider({ children }: Props) {
  const { isDark, setMode } = useModeStore();
  console.log(11, isDark);
  return (
    <div className={isDark ? style["light-theme"] : style["dark-theme"]}>
      {children}
    </div>
  );
}
