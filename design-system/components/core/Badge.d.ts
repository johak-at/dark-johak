import React from "react";

export type BadgeTone =
  | "neutral" | "primary" | "accent" | "highlight"
  | "sky" | "success" | "warning" | "error" | "info";
export type BadgeVariant = "soft" | "solid" | "outline";

/**
 * Compact label for status, category or count. Pill-shaped to echo the brand.
 * Use `soft` for most cases; `solid` for high emphasis; `outline` when on tinted surfaces.
 */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  variant?: BadgeVariant;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
