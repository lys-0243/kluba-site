import React, { useCallback, useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

interface ScrollToOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

export default function OnTopScroll() {
  const isBrowser = () => typeof window !== "undefined";
  const [y, setY] = useState(
    typeof window !== "undefined" ? window.scrollY : ""
  );
  const [scroll, setScroll] = useState(false);

  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;
    if (window.scrollY > 200) {
      setScroll(true);
    } else setScroll(false);
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className=" right-2 bottom-0 mb-8 mr-4 fixed z-50"
      onClick={scrollToTop}
    >
      {scroll ? <FiArrowUpCircle className=" w-10 h-10 text-primary" /> : ""}
    </button>
  );
}