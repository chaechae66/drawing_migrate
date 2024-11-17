"use client";

interface Props {
  data: TDraws;
}

const commentdata = [
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

import styles from "./Detail.module.scss";
import useModeStore from "../../_store/store";
import { TDraws } from "../../_type/data";
import AddDrawing from "../AddDrawing/AddDrawing";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import action from "../../_actions/action";

export default function Detail({ data }: Props) {
  const { isDark, setMode } = useModeStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .post("/updateCount", {
        seq: data.seq,
        view_cnt: data.view_cnt,
      })
      .then(() => {
        action(
          `${process.env.NEXT_PUBLIC_BASE_URL}/draws/${data.seq}`,
          data.seq
        );
      });
  }, []);

  const handleLike = () => {
    axios
      .post("/updateCount", {
        seq: data.seq,
        like_cnt: data.like_cnt,
      })
      .then(() => {
        action(
          `${process.env.NEXT_PUBLIC_BASE_URL}/draws/${data.seq}`,
          data.seq
        );
      });
  };

  return (
    <>
      {isOpen && (
        <AddDrawing
          setIsOpen={setIsOpen}
          addTitle={"그림 수정"}
          id={data.seq}
          data={data}
        />
      )}

      <div className={`wrap ${styles.wrap}`}>
        <div>
          <div className={styles.titleBox}>
            <div>
              <h2 className={styles.title}>{data.title}</h2>
              {/* <div className={styles.gray}>작성자 : {data.}</div> */}
            </div>
            <div className={styles.btnBox}>
              {/* {작성자와 localstorage 동일 시} */}
              <button
                className="dark-color"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                수정
              </button>
              <button className="dark-color">삭제</button>
            </div>
          </div>
          <div className={styles.imgbox}>
            <Image
              src={`data:image/${data.type};base64,${data.file}`}
              fill
              alt={data.title}
            />
          </div>
          <div className="flex center between">
            <div className={styles.gray}>{data.reg_dt.slice(0, 10)}</div>
            <div className="flex">
              <div className={`flex center ${styles.like} ${styles.icon}`}>
                <Image
                  src={`${isDark ? "/view_light.svg" : "/view.svg"}`}
                  alt="좋아요 아이콘"
                  width={23}
                  height={23}
                />
                <span>{data.view_cnt}</span>
              </div>
              <div className={`flex center ${styles.like} ${styles.icon}`}>
                <Image
                  onClick={handleLike}
                  src={`${isDark ? "/like_light.svg" : "/like.svg"}`}
                  alt="좋아요 아이콘"
                  width={21}
                  height={21}
                />
                <span>{data.like_cnt}</span>
              </div>
              <div className={`flex center ${styles.icon}`}>
                <Image
                  src={`${isDark ? "/comment_light.svg" : "/comment.svg"}`}
                  alt="댓글 아이콘"
                  width={24}
                  height={24}
                />
                {/* <span>{data.comment_cnt}</span> */}
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
            {commentdata.length === 0 ? (
              <div>댓글이 없습니다.</div>
            ) : (
              commentdata.map(({ id, comment, author }) => (
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
    </>
  );
}
