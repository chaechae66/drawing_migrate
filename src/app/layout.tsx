import type { Metadata } from "next";

import Header from "../_component/Header/Header";

import "../index.css";

export const metadata: Metadata = {
  title: "Drawing",
  description: "그림 공유 사이트 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
