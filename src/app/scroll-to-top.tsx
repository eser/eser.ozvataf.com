import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
  children: JSX.Element;
}

function ScrollToTop(props: ScrollToTopProps) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return props.children;
}

export { ScrollToTop as default };
