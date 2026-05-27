"use client";

import { useEffect } from "react";
import { defOpts } from "../../constants/defOpts";

export default function EZContentListener({ children }) {
    const previewOrigin = defOpts.preview_origin;

  useEffect(() => {
    // Only add listener if cacheBuster is present in the URL
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (!url.searchParams.has("cacheBuster")) return;

      function handleClickCapture(e) {
        let el = e.target;
        while (el && el !== document.body) {
          if (el.hasAttribute && el.hasAttribute("data-ez")) {
            // Your click logic here
            const compType = el.getAttribute("data-ez");
            if (e.target.closest("a")) e.preventDefault();
            const target = e.target;
            const clickedText = target.textContent?.trim() ?? null;
            const clickedSrc = target.tagName === "IMG" ? (target.src ?? null) : null;
            try {
              window.parent.postMessage(
                {
                  type: "iframe-click",
                  compType,
                  compIndex: compType.slice(-1),
                  compId: `${compType}`,
                  clickedText,
                  clickedSrc,
                },
                previewOrigin,
              );
            } catch (err) {
              console.error("[EZContentListener] postMessage failed:", err);
            }
            break;
          }
          el = el.parentElement;
        }
      }
      document.addEventListener("click", handleClickCapture, true);
      return () => {
        document.removeEventListener("click", handleClickCapture, true);
      };
    }
  }, []);
  return children;
}