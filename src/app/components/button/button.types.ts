import React from "react";

export type ButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  className?: string;
};
