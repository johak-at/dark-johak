import React from "react";

/**
 * Single-line text field with label, hint and error states.
 * Border turns petrol on focus, signal-red on error.
 *
 * @startingPoint section="Forms" subtitle="Text input — label, hint, error, adornments" viewport="700x180"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  containerStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
