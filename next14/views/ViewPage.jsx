"use client";

import React from 'react'
import { composeContent } from "../utils/composeContent";
export default function SlugPage({ content, globals, isPreview }) {

  const  {compListAll, contentListAll } = composeContent(content, globals, isPreview)
  const list = compListAll.filter((_, idx) => contentListAll[idx].comp_content);

  return (
      <div>
      {list.map((Itm, i) => (
         <div
            key={`itm-${i}`}
            id={`${contentListAll[i].comp_type}-${i}`}
            className="ez-content-component-container"
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
