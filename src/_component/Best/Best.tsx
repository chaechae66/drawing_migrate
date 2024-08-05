"use client";

import { useState } from "react";
import "../../_style/Common.css";
import styles from "./Best.module.css";

import { PanInfo, motion, useAnimation } from "framer-motion";

export default function Best() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      src: "/example_01.jpg",
      label: "좋아요수 2위",
      rank: "닉네임1",
      views: 1578,
      likes: 1578,
    },
    {
      id: 2,
      src: "/example_02.jpg",
      label: "좋아요수 3위",
      rank: "닉네임2",
      views: 1578,
      likes: 1578,
    },
    {
      id: 3,
      src: "/example_03.jpg",
      label: "조회수 1위",
      rank: "닉네임3",
      views: 1578,
      likes: 1578,
    },
    {
      id: 4,
      src: "/example_04.jpg",
      label: "조회수 2위",
      rank: "닉네임4",
      views: 1578,
      likes: 1578,
    },
    {
      id: 5,
      src: "/example_05.jpg",
      label: "조회수 3위",
      rank: "닉네임4",
      views: 1578,
      likes: 1578,
    },
    {
      id: 6,
      src: "/example_06.jpg",
      label: "좋아요수 1위",
      rank: "닉네임4",
      views: 1578,
      likes: 1578,
    },
  ]);

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
            {slides.map(({ id, label, rank, views, likes, src }, index) => (
              <motion.div
                className={styles.slider_item}
                key={id}
                animate={{
                  scale: scales[index],
                }}
              >
                <div className={styles.wrapper}>
                  <div className={`${styles.bg} flex column between`}>
                    <h4 className={styles.item_title}>{label}</h4>
                    <div className="flex between">
                      <span>{rank}님</span>
                      <div className="flex">
                        <div className={styles.info}>
                          <img
                            className={styles.icon}
                            src="/view.svg"
                            alt="조회수_아이콘"
                          />
                          <span>{views}</span>
                        </div>
                        <div className={styles.info}>
                          <img
                            className={styles.icon}
                            src="/like.svg"
                            alt="좋아요수_아이콘"
                          />
                          <span>{likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${src})`,
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
