import React from "react";

/**
 * Avatar for a student, teacher or user. Shows an image when `src` is given,
 * otherwise initials derived from `name` on a brand-tinted circle.
 */
export interface AvatarProps {
  name?: string;
  src?: string | null;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  tone?: "petrol" | "sky" | "red" | "amber" | "navy";
  square?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
