"use client";

import styles from "./Content.module.scss";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Variants, motion } from "framer-motion";
import { TDraws } from "../../_type/data";
import Link from "next/link";
import { useEffect } from "react";

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
  const { isLoading, data } = useQuery<{ data: { data: TDraws[] } }>({
    queryKey: ["draws"],
    queryFn: () => axios.get(`/draws`),
  });

  useEffect(() => {}, []);

  return (
    <section className={`wrap ${styles.section}`}>
      <div>
        <h3 className={styles.title}>그림 리스트</h3>
        <p className={styles.desc}>사람들이 공유한 그림들을 구경해보아요</p>
        <div className={styles.image_box}>
          {isLoading ? (
            <>로딩 중입니다.</>
          ) : (
            data!.data!.data!.map(
              ({ seq, file, type, title, view_cnt, like_cnt }) => (
                <motion.div
                  key={seq}
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={cardVariants}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Link href={`article/${seq}`}>
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
                              {/* <span>{comment_cnt}</span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src={`data:image/${type};base64,${file}`}
                        alt={title}
                        className={styles.image}
                      />
                    </div>
                  </Link>
                </motion.div>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
}
