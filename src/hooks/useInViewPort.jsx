import { useEffect, useState } from "react";

const useInViewPort = (ref) => {
  const [isInViewPort, setIsInViewPort] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewPort(entry.isIntersecting);
    });
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);
  return isInViewPort;
};

export default useInViewPort;
