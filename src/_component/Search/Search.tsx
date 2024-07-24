import Image from "next/image";

import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.wrap}>
      <Image
        src={"/search.svg"}
        alt="검색아이콘"
        width={15}
        height={15}
        className={styles.search_icon}
      />
      <input className={styles.search} />
    </div>
  );
}
