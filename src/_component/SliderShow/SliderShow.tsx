"use client";

import { MouseEvent, useState } from "react";
import { motion } from "framer-motion";

import Slider from "../Slider/Slider";
import styles from "./SliderShow.module.css";

const swipeConfidenceThreshold = 5000;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100dvw" : "-100dvw",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100dvw" : "-100dvw",
      opacity: 0,
    };
  },
};

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const sliderData = [
  {
    id: 0,
    title: "그림을 공유해보아요",
    desc: "자신의 그림을 함께 나누어 공유해보아요",
    img: "/slider_img01.jpg",
    bg: "#0E356C",
  },
  {
    id: 1,
    title: "자신의 멋진 그림을\n공유해보아요",
    desc: "자신의 그림을 함께 나누어\n공유해보아요",
    img: "/slider_img01.jpg",
    bg: "#FF0000",
  },
  {
    id: 2,
    title: "자신의 멋진 그림을\n공유해보아요",
    desc: "자신의 그림을 함께 나누어\n공유해보아요",
    img: "/slider_img01.jpg",
    bg: "#0000FF",
  },
];

export default function SliderShow() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage =
      page + newDirection > 2
        ? 0
        : page + newDirection < 0
        ? 2
        : page + newDirection;
    setPage([newPage, newDirection]);
  };

  const onChangeDot = (e: MouseEvent<HTMLDivElement>) => {
    const nodes = [...e.currentTarget.parentElement!.children];
    const index = nodes.indexOf(e.currentTarget);
    paginate(index - page);
  };

  return (
    <>
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {
            type: "spring",
            stiffness: 800,
            damping: 100,
            duration: 0.1,
          },
          opacity: { duration: 0.6 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > -swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        className={styles.animate}
      >
        <div
          className={`flex ${styles.slider_wrap}`}
          style={{
            left: -page * 100 + "dvw",
          }}
        >
          {sliderData.map(({ id, title, desc, img, bg }) => (
            <div key={"sliderData" + id}>
              <Slider title={title} desc={desc} img={img} bg={bg} />
            </div>
          ))}
        </div>
      </motion.div>
      <div className={styles.slider_dot_group}>
        <div className={`slider_dot ${styles.slider_dot} flex between`}>
          <div onClick={onChangeDot} className={`${styles.dot} dark-dot`}></div>
          <div onClick={onChangeDot} className={`${styles.dot} dark-dot`}></div>
          <div onClick={onChangeDot} className={`${styles.dot} dark-dot`}></div>
        </div>
      </div>
    </>
  );
}
