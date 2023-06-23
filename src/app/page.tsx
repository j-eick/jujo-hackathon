"use client"; // dirty fix? <-- https://stackoverflow.com/questions/74614922/super-expression-must-either-be-null-or-a-function-nextjs-13
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button";
import Input from "./components/input";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1B1A28",
          padding: "24px",
        }}
      >
        <Input value="Hello World" onChange={(e) => console.log({ e })} />
        <Button type="primary" onClick={() => {}} className={styles.testButton}>
          Primary Active
        </Button>
        <Button
          type="primary"
          disabled
          onClick={() => {}}
          className={styles.testButton}
        >
          Primary Disabled
        </Button>
        <Button
          type="secondary"
          onClick={() => {}}
          className={styles.testButton}
        >
          Secondary Active
        </Button>
        <Button
          type="secondary"
          disabled
          onClick={() => {}}
          className={styles.testButton}
        >
          Secondary Disabled
        </Button>
      </div>
    </main>
  );
}
