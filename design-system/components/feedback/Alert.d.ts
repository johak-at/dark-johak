import React from "react";

/**
 * Inline message banner with a coloured left edge and status icon.
 */
export interface AlertProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  tone?: "info" | "success" | "warning" | "error" | "neutral";
  icon?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}

export function Alert(props: AlertProps): JSX.Element;
