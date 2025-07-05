import type { Component } from "vue";

//Button
export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export type NamedComponent = Component & { name: string };

//Input
export interface InputProps {
  modelValue?: string;
  raw?: string;
  type?: string;
  disabled?: boolean;
}
