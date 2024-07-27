"use client";

interface Props {
  title: React.ReactNode | string;
  desc: React.ReactNode | string;
  img: string;
  bg: string;
}

import styles from "./Slider.module.css";

export default function Slider({ title, desc, img, bg }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={`wrap`}>
        <div className={`flex center between`}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
            <button
              style={{
                backgroundColor: bg,
              }}
              className={styles.login_btn}
            >
              로그인
            </button>
          </div>

          <img src={img} alt="슬라이더 배너" className={styles.banner_img} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: bg,
          width: "40%",
          height: "100%",
          top: 0,
          right: 0,
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
}
