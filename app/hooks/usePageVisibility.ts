import { useState, useEffect } from "react";

export const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(true); // Default to true for SSR

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof document === "undefined") return;
    
    setIsVisible(!document.hidden);
    
    const handler = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  return isVisible;
};