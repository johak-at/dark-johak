import React from "react";

export type LogoVariant =
  | "horizontal" | "horizontalClaim"
  | "vertical" | "verticalClaim"
  | "signet" | "white";

/**
 * Renders an official JO.HAK logo lockup. Point `basePath` at the copied
 * assets/logos directory relative to the consuming page.
 */
export interface LogoProps {
  variant?: LogoVariant;
  basePath?: string;
  height?: number;
  alt?: string;
  style?: React.CSSProperties;
}

export function Logo(props: LogoProps): JSX.Element;
