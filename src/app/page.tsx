import Best from "../_component/Best/Best";
import Slider from "../_component/Slider/Slider";

export default function RootPage() {
  return (
    <>
      <Slider
        title={
          <>
            자신의 멋진 그림을 <br />
            공유해보아요
          </>
        }
        desc={
          <>
            자신의 그림을 함께 나누며
            <br />
            소통해보아요
          </>
        }
        img="/slider_img01.jpg"
        bg="#0E356C"
      />
      <Best />
    </>
  );
}
