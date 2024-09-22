import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Search.module.css";
import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const activeEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      router.push(`/search?keyword=${searchValue}`);
    }
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
      <input
        onKeyDown={activeEnter}
        onChange={handleSearch}
        className={styles.search}
        value={searchValue || ""}
      />
    </motion.div>
  );
}
