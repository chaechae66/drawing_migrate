import Image from "next/image";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

import styles from "./AddDrawing.module.scss";
import { TDraws } from "../../_type/data";
import action from "../../_actions/action";

interface Props {
  setIsOpen: (x: boolean) => void;
  addTitle: string;
  id: null | number;
  data: null | TDraws;
}

export default function AddDrawing({ setIsOpen, addTitle, id, data }: Props) {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) {
      setTitle(data.title);
    }
  }, [data]);

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
    if (!imgFile) {
      alert("이미지를 넣어주세요");
      return;
    }
    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }

    const formdata = new FormData();
    formdata.append("file", imgFile);
    formdata.append("title", title);
    id && formdata.append("seq", String(id));

    axios
      .post("/update", formdata, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      })
      .then(() => {
        !id
          ? queryClient.invalidateQueries({
              queryKey: ["draws"],
            })
          : action(`${process.env.NEXT_PUBLIC_BASE_URL}/draws/${id}`, id);
      })
      .finally(() => {
        alert("성공적으로 업로드 되었습니다.");
        setTitle("");
        setImgFile(null);
        setPrevImg(null);
      });
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
        <h3 className={styles.title}>{addTitle}</h3>
        <div>
          <input
            className={styles.contentTitle}
            placeholder="제목"
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
            value={title}
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
          <div className={styles.imgbox}>
            {!prevImg && data?.file && (
              <Image
                src={`data:image/${data.type};base64,${data.file}`}
                fill
                alt={data.title}
              />
            )}
          </div>
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
