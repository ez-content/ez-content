"use client";

import React from 'react'
import { defOpts } from "../../constants/defOpts";

export default function ViewContent({ components, content, globals, isPreview, previewOrigin = defOpts.preview_origin }) {
  const list = components.filter((_, idx) => content[idx].comp_content);

  const handleClick = (compType, index, e) => {
      if (e.target.closest("a")) e.preventDefault();

      const target = e.target;
  const clickedText = target.textContent?.trim() ?? null;
  const clickedSrc = target.tagName === "IMG" ? (target.src ?? null) : null;

    try {
      window.parent.postMessage(
        { type: "iframe-click", compType, compIndex: index, compId: `${compType}-${index}`, clickedText, clickedSrc },
        previewOrigin
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
            id={`${content[i].comp_type}-${i}`}
            className="ez-content-component-container"
            data-testid={`component-${isPreview ? "preview" : "live"}-${i}`}
            onClickCapture={isPreview ? (e) => handleClick(content[i].comp_type, i, e) : undefined}

          >
          <Itm
            content={content[i].comp_content}
            globals={globals}
             onClick={() => handleClick(content[i].comp_type, i)}
          />
        </div>
      ))}
    </div>
  );
};

