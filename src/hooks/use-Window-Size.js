import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowsWidth, setWindowsWidth] = useState({ width: undefined });

  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth((prev) => ({ ...prev, width: window.innerWidth }));
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowsWidth;
};
