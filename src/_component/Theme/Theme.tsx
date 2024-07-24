import Image from "next/image";

import styles from "./Theme.module.css";

export default function Theme() {
  return (
    <>
      <div className={`${styles.theme} flex center`}>
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
