import { useEffect } from "react";
import { useLocation } from "react-router";

// @ts-ignore
const ScrollToTop = (props: any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return props.children;
};

export default ScrollToTop;
