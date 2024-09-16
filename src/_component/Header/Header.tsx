"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import "../../_style/Common.css";
import styles from "./Header.module.css";

import Search from "../Search/Search";
import Theme from "../Theme/Theme";

export default function Header() {
  const router = useRouter();
  return (
    <header className={`${styles.wrap} wrap flex center`}>
      <div className={`${styles.header} flex center between`}>
        <div
          className={styles.logo}
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={"/logo.svg"} alt="메인로고" width={25} height={22} />
          <h2>Drawing</h2>
        </div>
        <div className="flex center">
          <Search />
          <button
            onClick={() => {
              router.push("/auth/login");
            }}
            className={styles.login}
          >
            로그인
          </button>
          <Theme />
        </div>
      </div>
    </header>
  );
}
