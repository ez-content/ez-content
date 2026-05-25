"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { composeContent } from "../utils/composeContent";
import { defOpts } from "../../constants/defOpts";

export default function SlugPage({
  content,
  globals,
  isPreview,
  previewOrigin = defOpts.preview_origin,
}) {
  const searchParams = useSearchParams();
  const resolvedIsPreview = isPreview ?? searchParams.get("preview") === "true";

  const { compListAll, contentListAll } = composeContent(
    content,
    globals,
    resolvedIsPreview,
  );
  const list = compListAll.filter((_, idx) => contentListAll[idx].comp_content);

  const handleClick = (compType, index, e) => {
    if (e.target.closest("a")) e.preventDefault();
    const target = e.target;
    const clickedText = target.textContent?.trim() ?? null;
    const clickedSrc = target.tagName === "IMG" ? (target.src ?? null) : null;
    try {
      window.parent.postMessage(
        {
          type: "iframe-click",
          compType,
          compIndex: index,
          compId: `${compType}-${index}`,
          clickedText,
          clickedSrc,
        },
        previewOrigin,
      );
    } catch (err) {
      console.error("[ViewPage] postMessage failed:", err);
    }
  };

  return (
    <div>
      {list.map((Itm, i) => (
        <div
          key={`itm-${i}`}
          id={`${contentListAll[i].comp_type}-${i}`}
          className="ez-content-component-container"
          data-testid={`component-${resolvedIsPreview ? "preview" : "live"}-${contentListAll[i].comp_type}-${i}`}
          onClickCapture={
            resolvedIsPreview
              ? (e) => handleClick(contentListAll[i].comp_type, i, e)
              : undefined
          }
        >
          <Itm content={contentListAll[i].comp_content} globals={globals} />
        </div>
      ))}
    </div>
  );
}
