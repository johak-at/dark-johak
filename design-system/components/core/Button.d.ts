import React from "react";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "highlight"
  | "secondary"
  | "ghost"
  | "inverse";

export type ButtonSize = "sm" | "md" | "lg";

/**
 * Primary action control for JO.HAK interfaces. Pill-shaped, Coco Gothic label.
 * Use `primary` (petrol) for the main action, `accent` (red) sparingly for
 * high-emphasis CTAs, `secondary`/`ghost` for supporting actions.
 *
 * @startingPoint section="Core" subtitle="Pill button — 6 variants, 3 sizes" viewport="700x220"
 */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
