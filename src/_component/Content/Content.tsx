import styles from "./Content.module.css";

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

export default function Content() {
  return (
    <section className="wrap">
      <div>
        <h3 className={styles.title}>그림 리스트</h3>
        <p className={styles.desc}>사람들이 공유한 그림들을 구경해보아요</p>
        <div className={styles.image_box}>
          {dummy.map(({ id, img }) => (
            <img key={id} src={img} alt={img} className={styles.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
