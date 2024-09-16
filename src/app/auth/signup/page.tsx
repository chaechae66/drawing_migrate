import { FormEventHandler } from "react";

export default function SignUpPage() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <input type="text" placeholder="아이디" />
        <br />
        <input type="text" placeholder="비밀번호" />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
