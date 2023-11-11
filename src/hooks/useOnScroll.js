import { useEffect, useMemo, useState } from "react";

function useOnScroll(options, targetRef) {
  const [visible, setIsVisible] = useState(false);

  function callback(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);

  return visible;
}

export default useOnScroll;
