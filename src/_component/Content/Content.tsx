"use client";

import styles from "./Content.module.scss";

import { Variants, motion } from "framer-motion";

// 더미데이터
const dummy = [
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
    file: "/example_01.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 2,
    title: "제목",
    file: "/example_05.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 3,
    title: "제목",
    file: "/example_06.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 4,
    title: "제목",
    file: "/example_01.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 5,
    title: "제목",
    file: "/example_02.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 6,
    title: "제목",
    file: "/example_03.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 7,
    title: "제목",
    file: "/example_05.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 8,
    title: "제목",
    file: "/example_01.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
  },
  {
    seq: 9,
    title: "제목",
    file: "/example_05.jpg",
    reg_dt: "2024-10-03",
    view_cnt: 1242,
    like_cnt: 1242,
    comment_cnt: 32,
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
    <section className={`wrap ${styles.section}`}>
      <div>
        <h3 className={styles.title}>그림 리스트</h3>
        <p className={styles.desc}>사람들이 공유한 그림들을 구경해보아요</p>
        <div className={styles.image_box}>
          {dummy.map(
            ({ seq, file, title, view_cnt, like_cnt, comment_cnt }) => (
              <motion.div
                key={seq}
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div className={styles.wrapper}>
                  <div className={`${styles.bg} flex column between`}>
                    <h4 className={styles.item_title}>{title}</h4>
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
                  <img src={file} alt={title} className={styles.image} />
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
