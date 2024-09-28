const dummy = {
  title: "test",
  auth: "admin",
  reg_dt: "2024-09-16",
  upt_dt: "2024-09-16",
  like: 1243,
  comment: 23424,
};

import Image from "next/image";
import styles from "./ArticlePage.module.scss";

export default function ArticlePage() {
  return (
    <div className={`wrap ${styles.wrap}`}>
      <div>
        <div className={styles.titleBox}>
          <div>
            <h2 className={styles.title}>{dummy.title}</h2>
            <div className={styles.gray}>작성자 : {dummy.auth}</div>
          </div>
          <div className={styles.btnBox}>
            {/* {작성자와 localstorage 동일 시} */}
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div className={styles.imgbox}>
          <Image src={"/example_02.jpg"} fill alt={dummy.title} />
        </div>
        <div className="flex center between">
          <div className={styles.gray}>
            {/* {reg_dt와 upt_dt 계산하기} */}
            {dummy.reg_dt}
          </div>
          <div className="flex">
            <div className={`flex center ${styles.like}`}>
              <Image
                src={"/heart.svg"}
                alt="좋아요 아이콘"
                width={25}
                height={25}
              />
              <span>{dummy.like}</span>
            </div>
            <div className="flex center">
              <Image
                src={"/common.svg"}
                alt="댓글 아이콘"
                width={25}
                height={25}
              />
              <span>{dummy.comment}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
