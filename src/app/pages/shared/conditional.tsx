import type { ReactNode } from "react";

interface ConditionalProps {
  test: boolean;
  children: ReactNode;
}

function Conditional(props: ConditionalProps) {
  if (!props.test) {
    return null;
  }

  return props.children;
}

export { Conditional as default };
