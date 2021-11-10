import React from "react";

const useIntersectionObserver = (
  options: IntersectionObserverInit,
): [React.MutableRefObject<null>, boolean] => {
  const containerRef = React.useRef(null);

  const [isVisible, setIsVisible] = React.useState(false);

  function callbackFunc(entries: IntersectionObserverEntry[]): void {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export { useIntersectionObserver };
