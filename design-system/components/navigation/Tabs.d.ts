import React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  badge?: React.ReactNode;
}

/**
 * Underline tab switcher (display-font (Akzidenz-Grotesk) labels, petrol active indicator).
 * Controlled via `value`/`onChange` or uncontrolled (defaults to first item).
 */
export interface TabsProps {
  items: TabItem[];
  value?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
