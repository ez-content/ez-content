"use client";

import React from 'react'
import { composeContent } from "../utils/composeContent";
import { defOpts } from "../../constants/defOpts";

export default function SlugPage({ content, globals, isPreview, previewOrigin = defOpts.preview_origin }) {

  const  {compListAll, contentListAll } = composeContent(content, globals, isPreview)
  const list = compListAll.filter((_, idx) => contentListAll[idx].comp_content);

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
            id={`${contentListAll[i].comp_type}-${i}`}
            className="ez-content-component-container"
            onClick={isPreview ? () => handleClick(contentListAll[i].comp_type, i) : undefined}
          >
          <Itm
            content={contentListAll[i].comp_content}
            globals={globals}
          />
        </div>
      ))}
    </div>
  );
}
