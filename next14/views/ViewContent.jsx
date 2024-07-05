"use client";

import React from 'react'
export default function ViewContent({ components, content, globals }) {
  const list = components.filter((_, idx) => content[idx].comp_content);
  return (
    <div>
      {list.map((Itm, i) => (
         <div
            key={`itm-${i}`}
            id={`${content[i].comp_type}-${i}`}
            className="ez-content-component-container"
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

