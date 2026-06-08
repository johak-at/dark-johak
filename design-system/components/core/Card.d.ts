import React from "react";

export type CardAccent = "petrol" | "sky" | "red" | "amber" | "signet";

/**
 * Primary content container — soft rounded corners and a cool low shadow.
 * Optional top `accent` bar references the four-colour signet.
 *
 * @startingPoint section="Core" subtitle="Content card with optional accent edge" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  elevation?: "none" | "xs" | "sm" | "md" | "lg";
  accent?: CardAccent | null;
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
