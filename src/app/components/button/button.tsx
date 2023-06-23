import React from "react";
import { Button as AntdButton } from "antd";
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
    <AntdButton
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
    </AntdButton>
  );
};

export default Button;
