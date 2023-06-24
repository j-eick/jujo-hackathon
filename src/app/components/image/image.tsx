import React from "react";
import Image from "next/image";

import { ImageProps } from "./image.types";
import styles from "./image.module.css";

const ProductImage = ({ width = 100, height = 100, src, alt }: ImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} className={styles.image} />;
};

export default ProductImage;
