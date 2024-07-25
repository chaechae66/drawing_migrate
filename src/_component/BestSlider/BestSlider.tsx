interface Props {
  title: string;
  img: string;
  user: string;
  view: number;
  like: number;
  scale: number;
}

import "../../_style/Common.css";
import styles from "./BestSlider.module.css";

export default function BestSlider({
  title,
  img,
  user,
  view,
  like,
  scale,
}: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{
        scale,
      }}
    >
      <div className={`${styles.bg} flex column between`}>
        <h4 className={styles.title}>{title}</h4>
        <div className="flex between">
          <span>{user}님</span>
          <div className="flex">
            <div className={styles.info}>
              <img
                className={styles.icon}
                src="/view.svg"
                alt="조회수_아이콘"
              />
              <span>{view}</span>
            </div>
            <div className={styles.info}>
              <img
                className={styles.icon}
                src="/like.svg"
                alt="좋아요수_아이콘"
              />
              <span>{like}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
}
