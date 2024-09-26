"use client";

import useModeStore from "../_store/store";
import style from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function DarkModeProvider({ children }: Props) {
  const { isDark, setMode } = useModeStore();
  return (
    <div className={isDark ? "light-theme" : "dark-theme"}>{children}</div>
  );
}
