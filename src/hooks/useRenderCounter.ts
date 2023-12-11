import { useEffect, useRef } from "react";

const useRenderCounter = (onRender: (count: number) => void): number => {
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1;
    onRender(renderCount.current);
  }, [onRender]);

  return renderCount.current;
};

export default useRenderCounter;
