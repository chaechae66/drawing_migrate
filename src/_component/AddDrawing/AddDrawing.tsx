import Image from "next/image";
import styles from "./AddDrawing.module.css";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

interface Props {
  setIsOpen: (x: boolean) => void;
}

export default function AddDrawing({ setIsOpen }: Props) {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onLoadFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const file = e.target.files![0];
    if (!file) {
      return;
    }
    setImgFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPrevImg(reader.result as string);
    };
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.bg}>
      <form onSubmit={handleSubmit} className={`${styles.popup}`}>
        <div className={`${styles.imgbox} flex dark-nonebg`}>
          <Image
            className={`${styles.close}`}
            width={15}
            height={15}
            src={"/close.svg"}
            alt="닫기"
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <h3 className={styles.title}>그림 업로드</h3>
        <div>
          <input
            className={styles.contentTitle}
            placeholder="제목"
            type="text"
          />
        </div>
        <div>
          <button
            className={`${styles.button} dark-button`}
            type="button"
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            파일 선택
          </button>
          <span>파일 이름 : {imgFile?.name ? imgFile?.name : "선택안됨"}</span>
        </div>
        <input
          ref={inputRef}
          style={{
            display: "none",
          }}
          type="file"
          onChange={onLoadFile}
          accept=".jpg,.jpeg,.png"
        />
        <div>
          {prevImg && (
            <div className="flex column">
              <Image
                className={styles.content}
                src={prevImg}
                fill
                alt="사용자 그림"
              />
              <button type="submit" className={`${styles.submit} dark-button`}>
                업로드
              </button>
            </div>
          )}
        </div>
      </form>
      <div className={`${styles.dimmed}`}></div>
    </div>
  );
}
