import React, { FC } from "react";

export type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  loader?: FC;
};
