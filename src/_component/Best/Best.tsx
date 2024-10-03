"use client";

import { useState } from "react";
import "../../_style/Common.scss";
import styles from "./Best.module.scss";

import { PanInfo, motion, useAnimation } from "framer-motion";

const dummy = {
  likes: [
    {
      seq: 0,
      title: "제목",
      file: "/example_01.jpg",
      reg_dt: "2024-10-03",
      view_cnt: 1242,
      like_cnt: 1242,
      comment_cnt: 32,
    },
    {
      seq: 1,
      title: "제목",
      file: "/example_02.jpg",
      reg_dt: "2024-10-03",
      view_cnt: 1242,
      like_cnt: 1242,
      comment_cnt: 32,
    },
    {
      seq: 2,
      title: "제목",
      file: "/example_03.jpg",
      reg_dt: "2024-10-03",
      view_cnt: 1242,
      like_cnt: 1242,
      comment_cnt: 32,
    },
  ],
  views: [
    {
      seq: 3,
      title: "제목",
      file: "/example_04.jpg",
      reg_dt: "2024-10-03",
      view_cnt: 1242,
      like_cnt: 1242,
      comment_cnt: 32,
    },
    {
      seq: 4,
      title: "제목",
      file: "/example_05.jpg",
      reg_dt: "2024-10-03",
      view_cnt: 1242,
      like_cnt: 1242,
      comment_cnt: 32,
    },
    {
      seq: 5,
      title: "제목",
      file: "/example_06.jpg",
      reg_dt: "2024-10-03",
      view_cnt: 1242,
      like_cnt: 1242,
      comment_cnt: 32,
    },
  ],
};

const likes = dummy.likes.map((item, index) => ({
  ...item,
  rank: `좋아요수 ${index + 1}등`,
}));
const views = dummy.views.map((item, index) => ({
  ...item,
  rank: `조회수 ${index + 1}등`,
}));

const data = likes.concat(views);

export default function Best() {
  const [slides, setSlides] = useState(data);

  const [currentSlide, setCurrentSlide] = useState(
    Math.floor(slides.length / 2)
  );
  const scales = [0.8, 0.9, 1, 0.9, 0.8, 0.7];
  const controls = useAnimation();

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
      setSlides((prev) => {
        const copy = [...prev];
        const poped = copy.pop();
        copy.unshift(poped!);
        return copy;
      });
    } else if (info.offset.x < -50) {
      setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      setSlides((prev) => {
        const copy = [...prev];
        const spliced = copy.splice(0, 1);
        return [...copy, ...spliced];
      });
    }
  };

  return (
    <section className="wrap">
      <div>
        <h3 className={styles.title}>이 달의 베스트</h3>
        <p className={styles.desc}>
          이 달에 가장 반응 좋은 그림과 조회가 많이 된 그림을 소개해요
        </p>
        <div className={`${styles.animate}`}>
          <motion.div
            className={`${styles.slider} flex`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {slides.map(
              (
                { seq, title, file, view_cnt, like_cnt, rank, comment_cnt },
                index
              ) => (
                <motion.div
                  className={styles.slider_item}
                  key={seq}
                  animate={{
                    scale: scales[index],
                  }}
                >
                  <div className={styles.wrapper}>
                    <div className={`${styles.bg} flex column between`}>
                      <h4 className={styles.item_title}>
                        {rank}
                        <div className="dark-nobg">{title}</div>
                      </h4>
                      <div className="flex between dark-nobg">
                        <div className="flex dark-nobg">
                          <div className={`${styles.info} dark-nobg`}>
                            <img
                              className={styles.icon}
                              src="/view.svg"
                              alt="조회수_아이콘"
                            />
                            <span>{view_cnt}</span>
                          </div>
                          <div className={`${styles.info} dark-nobg`}>
                            <img
                              className={styles.icon}
                              src="/like.svg"
                              alt="좋아요수_아이콘"
                            />
                            <span>{like_cnt}</span>
                          </div>
                          <div className={`${styles.info} dark-nobg`}>
                            <img
                              className={styles.icon}
                              src="/comment.svg"
                              alt="댓글수_아이콘"
                            />
                            <span>{comment_cnt}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.image}
                      style={{
                        backgroundImage: `url(${file})`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
