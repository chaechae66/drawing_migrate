"use client";

import Image from "next/image";
import { FormEventHandler } from "react";

import style from "./login.module.css";

export default function AuthPage() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={`wrap ${style.wrap}`}>
        <div>
          <form className={"flex center column"} onSubmit={handleSubmit}>
            <h2 className={style.title}>로그인</h2>
            <button className={style.button}>
              <Image
                src={"/kakao.svg"}
                alt="카카오톡 소셜로그인"
                width={30}
                height={30}
              />
              <span>카카오로 로그인하기</span>
            </button>
            <button className={style.button}>
              <Image
                src={"/google.svg"}
                alt="구글 소셜로그인"
                width={30}
                height={30}
              />
              <span>구글로 로그인하기</span>
            </button>
            {/* <input type="text" placeholder="아이디" />
        <br />
        <input type="text" placeholder="비밀번호" />
        <br />
        <button type="submit">로그인</button> */}
          </form>
        </div>
      </div>
    </>
  );
}
