"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import "../../_style/Common.css";
import styles from "./Header.module.css";

import Search from "../Search/Search";
import Theme from "../Theme/Theme";
import { useEffect, useState } from "react";
import AddDrawing from "../AddDrawing/AddDrawing";

export default function Header() {
  const router = useRouter();
  // const accessToken = localStorage.getItem("accessToken");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <AddDrawing setIsOpen={setIsOpen} />}
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
            {/* accessToken ? (
          <button
            onClick={() => {
              router.push("/auth/login");
            }}
            className={styles.login}
          >
            로그인
          </button>
          ) : ( */}
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className={styles.login}
            >
              업로드
            </button>
            {/* ) */}
            <Theme />
          </div>
        </div>
      </header>
    </>
  );
}
