import { ReactNode } from "react";

export function Stack({
  vertical = false,
  horizontal = false,
  children,
  gap,
}: {
  vertical?: boolean;
  horizontal?: boolean;
  children?: ReactNode;
  gap?: number;
}) {
  const styles = {
    display: horizontal && !vertical ? "flex" : "",
    gap: gap ?? 0,
  };

  return <div style={styles}>{children}</div>;
}
