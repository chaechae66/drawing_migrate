import type { Metadata } from "next";

import Header from "../_component/Header/Header";

import "../index.css";
import "../_style/Common.scss";
import styles from "./layout.module.scss";
import DarkModeProvider from "./DarkModeProvider";

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
        <DarkModeProvider>
          <Header />
          <div id="root" className={styles.content}>
            {children}
          </div>
          <footer className={`flex center ${styles.footer}`}>
            copyright&copy; 2024 All rights reserved
          </footer>
        </DarkModeProvider>
      </body>
    </html>
  );
}
