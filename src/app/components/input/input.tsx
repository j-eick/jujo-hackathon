import React from "react";

import { InputProps } from "./input.types";
import styles from "./input.module.css";

const Input = ({
  value,
  onChange,
  placeholder = "Your Input",
  disabled = false,
}: InputProps) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
