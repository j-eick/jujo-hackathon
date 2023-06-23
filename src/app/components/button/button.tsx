import React from "react";
import cn from "classnames";

import { ButtonProps } from "./button.types";
import styles from "./button.module.css";

const Button = ({
  onClick,
  children,
  type,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        {
          [styles.primary]: type === "primary",
          [styles.secondary]: type === "secondary",
        },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
