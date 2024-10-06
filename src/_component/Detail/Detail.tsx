"use client";

const dummy = {
  seq: 2,
  title: "제목",
  file: "/example_03.jpg",
  reg_dt: "2024-10-03",
  view_cnt: 1242,
  like_cnt: 1242,
  comment_cnt: 32,
  author: "test",
};

const commentDummy = [
  {
    id: 0,
    comment: "댓글Test",
    author: "test",
  },
  {
    id: 1,
    comment: "댓글Test",
    author: "test",
  },
  {
    id: 2,
    comment: "댓글Test",
    author: "test",
  },
  {
    id: 3,
    comment: "댓글Test",
    author: "test",
  },
  {
    id: 4,
    comment: "댓글Test",
    author: "test",
  },
];

import Image from "next/image";
import styles from "./Detail.module.scss";
import useModeStore from "../../_store/store";

export default function Detail() {
  const { isDark, setMode } = useModeStore();
  return (
    <div className={`wrap ${styles.wrap}`}>
      <div>
        <div className={styles.titleBox}>
          <div>
            <h2 className={styles.title}>{dummy.title}</h2>
            <div className={styles.gray}>작성자 : {dummy.author}</div>
          </div>
          <div className={styles.btnBox}>
            {/* {작성자와 localstorage 동일 시} */}
            <button className="dark-color">수정</button>
            <button className="dark-color">삭제</button>
          </div>
        </div>
        <div className={styles.imgbox}>
          <Image src={dummy.file} fill alt={dummy.title} />
        </div>
        <div className="flex center between">
          <div className={styles.gray}>
            {/* {reg_dt와 upt_dt 계산하기} */}
            {dummy.reg_dt}
          </div>
          <div className="flex">
            <div className={`flex center ${styles.like} ${styles.icon}`}>
              <Image
                src={`${isDark ? "/view_light.svg" : "/view.svg"}`}
                alt="좋아요 아이콘"
                width={23}
                height={23}
              />
              <span>{dummy.view_cnt}</span>
            </div>
            <div className={`flex center ${styles.like} ${styles.icon}`}>
              <Image
                src={`${isDark ? "/like_light.svg" : "/like.svg"}`}
                alt="좋아요 아이콘"
                width={21}
                height={21}
              />
              <span>{dummy.like_cnt}</span>
            </div>
            <div className={`flex center ${styles.icon}`}>
              <Image
                src={`${isDark ? "/comment_light.svg" : "/comment.svg"}`}
                alt="댓글 아이콘"
                width={24}
                height={24}
              />
              <span>{dummy.comment_cnt}</span>
            </div>
          </div>
        </div>
        <form className={styles.commentForm}>
          <input className={styles.input} type="text" />
          <button
            className={`${styles.btn}`}
            style={{
              backgroundColor: isDark ? "#000" : "#fff",
              color: isDark ? "#fff" : "#000",
            }}
          >
            완료
          </button>
        </form>
        <div className={styles.commentWrap}>
          {commentDummy.length === 0 ? (
            <div>댓글이 없습니다.</div>
          ) : (
            commentDummy.map(({ id, comment, author }) => (
              <div key={id} className={`${styles.comment}`}>
                <div className={`flex center between ${styles.authoInfo}`}>
                  <span>작성자 : {author}</span>
                  <div className={`${styles.authorBtnBox}`}>
                    {/* {작성자와 localstorage 동일 시} */}
                    <button className="dark-color">수정</button>
                    <button className="dark-color">삭제</button>
                  </div>
                </div>
                <input
                  className={`${styles.commentInput}`}
                  defaultValue={comment}
                  disabled={true}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
