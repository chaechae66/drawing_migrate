import "../../_style/Common.css";
import BestSlider from "../BestSlider/BestSlider";
import styles from "./Best.module.css";

// 더미 데이터
const dummy = [
  {
    id: 0,
    title: "좋아요 2위",
    img: "/example_01.jpg",
    user: "닉넴아무개",
    view: 2343,
    like: 2623,
    scale: 0.8,
  },
  {
    id: 1,
    title: "좋아요 3위",
    img: "/example_02.jpg",
    user: "닉넴아무개",
    view: 2343,
    like: 2623,
    scale: 0.9,
  },
  {
    id: 2,
    title: "조회수 1위",
    img: "/example_03.jpg",
    user: "닉넴아무개",
    view: 2343,
    like: 2623,
    scale: 1.0,
  },
  {
    id: 3,
    title: "조회수 2위",
    img: "/example_04.jpg",
    user: "닉넴아무개",
    view: 2343,
    like: 2623,
    scale: 0.9,
  },
  {
    id: 4,
    title: "조회수 3위",
    img: "/example_05.jpg",
    user: "닉넴아무개",
    view: 2343,
    like: 2623,
    scale: 0.8,
  },
];

export default function Best() {
  return (
    <section className="wrap">
      <div>
        <h3 className={styles.title}>이 달의 베스트</h3>
        <p className={styles.desc}>
          이 달에 가장 반응 좋은 그림과 조회가 많이 된 그림을 소개해요
        </p>
        <div className={`flex ${styles.slider}`}>
          {dummy.map(({ id, title, img, user, view, like, scale }) => (
            <div className={styles.slider_item} key={id}>
              <BestSlider
                title={title}
                img={img}
                like={like}
                user={user}
                view={view}
                scale={scale}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
