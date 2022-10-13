import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";
export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export const Text = ({ size = "md", children, asChild }: TextProps) => {
  const Comp = asChild ? Slot : "span";
  const FontSizeCustom = {
    "text-xs": size == "sm",
    "text-sm": size == "md",
    "text-md": size == "lg",
  };
  return (
    <Comp className={clsx("text-gray-100  font-sans", FontSizeCustom)}>
      {children}
    </Comp>
  );
};
