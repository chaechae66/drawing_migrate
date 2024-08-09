"use client";

import styles from "./Content.module.css";

import { Variants, motion } from "framer-motion";

// 더미데이터
const dummy = [
  {
    id: 0,
    img: "/example_01.jpg",
  },
  {
    id: 1,
    img: "/example_02.jpg",
  },
  {
    id: 2,
    img: "/example_03.jpg",
  },
  {
    id: 3,
    img: "/example_04.jpg",
  },
  {
    id: 4,
    img: "/example_05.jpg",
  },
  {
    id: 5,
    img: "/example_06.jpg",
  },
  {
    id: 6,
    img: "/example_05.jpg",
  },
  {
    id: 7,
    img: "/example_04.jpg",
  },
  {
    id: 8,
    img: "/example_03.jpg",
  },
  {
    id: 9,
    img: "/example_02.jpg",
  },
  {
    id: 10,
    img: "/example_01.jpg",
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};
export default function Content() {
  return (
    <section className="wrap">
      <div>
        <h3 className={styles.title}>그림 리스트</h3>
        <p className={styles.desc}>사람들이 공유한 그림들을 구경해보아요</p>
        <div className={styles.image_box}>
          {dummy.map(({ id, img }) => (
            <motion.div
              key={id}
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <img src={img} alt={img} className={styles.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
