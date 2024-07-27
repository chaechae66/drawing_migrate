import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Search.module.css";
import { ChangeEvent, useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <motion.div
      className={styles.wrap}
      initial={{ width: "12ch" }}
      animate={{ width: `${searchValue.length + 8}ch` }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={"/search.svg"}
        alt="검색아이콘"
        width={15}
        height={15}
        className={styles.search_icon}
      />
      <input onChange={handleSearch} className={styles.search} />
    </motion.div>
  );
}
