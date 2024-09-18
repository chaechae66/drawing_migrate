import Image from "next/image";

import styles from "./Theme.module.css";
import useModeStore from "../../_store/store";

export default function Theme() {
  const { isDark, setMode } = useModeStore();
  return (
    <>
      <div
        className={`${styles.theme} flex center`}
        onClick={() => {
          setMode();
        }}
      >
        <Image
          src={"/dark_theme.svg"}
          alt="다크모드 아이콘"
          width={18}
          height={18}
        />
      </div>
    </>
  );
}
