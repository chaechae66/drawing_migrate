"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import "../../_style/Common.scss";
import styles from "./Header.module.scss";

import Search from "../Search/Search";
import Theme from "../Theme/Theme";
import { useEffect, useState } from "react";
import AddDrawing from "../AddDrawing/AddDrawing";
import useModeStore from "../../_store/store";

export default function Header() {
  const router = useRouter();
  // const accessToken = localStorage.getItem("accessToken");
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setMode } = useModeStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <AddDrawing
          setIsOpen={setIsOpen}
          addTitle={"그림 업로드"}
          id={null}
          data={null}
        />
      )}
      <header className={`${styles.wrap} wrap flex center dark-border`}>
        <div className={`${styles.header} flex center between`}>
          <div
            className={styles.logo}
            onClick={() => {
              router.push("/");
            }}
          >
            {isDark ? (
              <Image src={"/logo.svg"} alt="메인로고" width={25} height={22} />
            ) : (
              <Image
                src={"/dark_logo.svg"}
                alt="메인로고"
                width={25}
                height={22}
              />
            )}
            <h2>Drawing</h2>
          </div>
          <div className="flex center">
            <Search />
            {/* accessToken ? (
          <button
            onClick={() => {
              router.push("/auth/login");
            }}
            className={`${styles.login} dark-button`}
          >
            로그인
          </button>
          ) : ( */}
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className={`${styles.login} dark-button`}
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
