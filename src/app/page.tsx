"use client"; // dirty fix? <-- https://stackoverflow.com/questions/74614922/super-expression-must-either-be-null-or-a-function-nextjs-13
import styles from "./page.module.css";
import Button from "./components/button";
import Input from "./components/input";
import ProductImage from "./components/image";

console.clear();

export default function Home() {
  return (
    <main className={styles.main}>
      <Input value="Hello World" onChange={(e) => console.log({ e })} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1B1A28",
          padding: "24px",
        }}
      >
        <h1>Leather Jacket</h1>
        <ul className={styles.drama_description_list}>
          <li className={styles.drama_description_item}>
            <p className={styles.p}>Drama: Descendants of the sun, S1/EP2</p>
          </li>
          <li className={styles.drama_description_item}>
            <p className={styles.p}>Actors: Park Seo-Jun, as Minho</p>
          </li>
        </ul>
        <ul className={styles.ul}>
          <li>
            <ProductImage src={require("./../../public/jacket.png")} alt="stuff" width={150} height={150} />
          </li>
          <li>
            <ProductImage src={require("./../../public/jacket.png")} alt="stuff" width={150} height={150} />
          </li>
        </ul>
        <Button type="primary" onClick={() => {}} className={styles.testButton}>
          Amazon
        </Button>
        <Button type="primary" onClick={() => {}} className={styles.testButton}>
          Ebay
        </Button>
        <Button type="primary" onClick={() => {}} className={styles.testButton}>
          yo mama
        </Button>
        {/* <Button type="primary" disabled onClick={() => {}} className={styles.testButton}>
          Primary Disabled
        </Button>
        <Button type="secondary" onClick={() => {}} className={styles.testButton}>
          Secondary Active
        </Button>
        <Button type="secondary" disabled onClick={() => {}} className={styles.testButton}>
          Secondary Disabled
        </Button> */}
      </div>
    </main>
  );
}
