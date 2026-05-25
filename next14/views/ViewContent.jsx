"use client";

import React from 'react'
import { defOpts } from "../../constants/defOpts";

export default function ViewContent({ components, content, globals, isPreview, previewOrigin = defOpts.preview_origin }) {
  const list = components.filter((_, idx) => content[idx].comp_content);

  const handleClick = (compType, index) => {
    window.parent.postMessage(
      { type: "iframe-click", compType, compIndex: index, compId: `${compType}-${index}` },
      previewOrigin
    );
  };

  return (
    <div>
      {list.map((Itm, i) => (
         <div
            key={`itm-${i}`}
            id={`${content[i].comp_type}-${i}`}
            className="ez-content-component-container"
            onClick={isPreview ? () => handleClick(content[i].comp_type, i) : undefined}
          >
          <Itm
            content={content[i].comp_content}
            globals={globals}
          />
        </div>
      ))}
    </div>
  );
};

