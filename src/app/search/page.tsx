"use client";
const dummy = [
  {
    seq: 0,
    title: "제목",
    file: "/example_01.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
    author: "test",
  },
  {
    seq: 1,
    title: "제목",
    file: "/example_02.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
    author: "test",
  },
  {
    seq: 2,
    title: "제목",
    file: "/example_03.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
    author: "test",
  },
  {
    seq: 3,
    title: "제목",
    file: "/example_04.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
    author: "test",
  },
  {
    seq: 4,
    title: "제목",
    file: "/example_05.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
    author: "test",
  },
  {
    seq: 5,
    title: "제목",
    file: "/example_06.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
    author: "test",
  },
];

import { useSearchParams } from "next/navigation";

import style from "./search.module.scss";
import Image from "next/image";
import { useState } from "react";
import useModeStore from "../../_store/store";

export default function SearchPage() {
  const { isDark, setMode } = useModeStore();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [status, setStatus] = useState({
    both: true,
    title: false,
    content: false,
  });

  const handleStatus = (
    _e: React.MouseEvent,
    _status: "both" | "title" | "content"
  ) => {
    switch (_status) {
      case "both":
        setStatus({
          both: true,
          title: false,
          content: false,
        });
        break;
      case "title":
        setStatus({
          both: false,
          title: true,
          content: false,
        });
        break;
      case "content":
        setStatus({
          both: false,
          title: false,
          content: true,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrap">
      <div>
        <main className={style.main}>
          <h3 className={style.keyword}>{keyword}의 검색결과</h3>
          <div className={`${style.inputBox} flex between`}>
            <div>
              <button
                style={{
                  backgroundColor: status.both ? "#000" : "#f1f1f1",
                  color: status.both ? "#fff" : "#000",
                }}
                onClick={(e) => {
                  handleStatus(e, "both");
                }}
              >
                둘 다
              </button>
              <button
                style={{
                  backgroundColor: status.title ? "#000" : "#f1f1f1",
                  color: status.title ? "#fff" : "#000",
                }}
                onClick={(e) => {
                  handleStatus(e, "title");
                }}
              >
                제목만
              </button>
              <button
                style={{
                  backgroundColor: status.content ? "#000" : "#f1f1f1",
                  color: status.content ? "#fff" : "#000",
                }}
                onClick={(e) => {
                  handleStatus(e, "content");
                }}
              >
                작성자만
              </button>
            </div>
            <select className={`${style.select} dark-color`}>
              <option>최신순</option>
              <option>인기순</option>
            </select>
          </div>
        </main>
        <section className={`flex ${style.section}`}>
          {dummy.map((item) => (
            <div className={style.item} key={item.seq}>
              <div className="flex between">
                <div>
                  <h4 className={style.itemTitle}>{item.title}</h4>
                  <span className={style.dt}>{item.reg_dt}</span>
                </div>
                <div className={style.auth}>{item.author}님</div>
              </div>
              <div className={style.imgBox}>
                <Image
                  src={item.file}
                  alt={item.title}
                  fill
                  className={style.itemImg}
                />
              </div>
              <div className={`flex ${style.iconWrap}`}>
                <div className={`flex ${style.iconBox}`}>
                  <Image
                    src={`${isDark ? "view_light.svg" : "/view.svg"}`}
                    alt="조회수아이콘"
                    width={20}
                    height={20}
                  />
                  <span className={style.icon}>{item.view_cnt}</span>
                </div>
                <div className={`flex ${style.iconBox}`}>
                  <Image
                    src={`${isDark ? "/like_light.svg" : "/like.svg"}`}
                    alt="좋아요수아이콘"
                    width={18}
                    height={18}
                  />
                  <span className={style.icon}>{item.like_cnt}</span>
                </div>
                <div className={`flex ${style.iconBox}`}>
                  <Image
                    src={`${isDark ? "/comment_light.svg" : "/comment.svg"}`}
                    alt="좋아요수아이콘"
                    width={18}
                    height={18}
                  />
                  <span className={style.icon}>{item.comment_cnt}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
