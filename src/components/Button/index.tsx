import React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?:
    | "primary"
    | "secondary"
    | "primary-outline"
    | "secondary-outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, type = "button", colorScheme = "primary", ...props },
    ref
  ) => {
    return (
      <button
        className={`${styles.btn} ${getColorScheme(colorScheme)} ${className}`}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;

function getColorScheme(
  colorScheme: "primary" | "secondary" | "primary-outline" | "secondary-outline"
) {
  if (colorScheme === "primary") {
    return styles["btn-primary"];
  }
  if (colorScheme === "secondary") {
    return styles["btn-secondary"];
  }
  if (colorScheme === "primary-outline") {
    return styles["btn-primary-outline"];
  }
  if (colorScheme === "secondary-outline") {
    return styles["btn-secondary-outline"];
  }
}
