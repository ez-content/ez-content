"use client";

import React from 'react'
import { composeContent } from "../utils/composeContent";
import ViewContent from "./ViewContent";

export default function SlugPage({ content, globals, isPreview }) {

  const  {compListAll, contentListAll } = composeContent(content, globals, isPreview)


  return (
    <div>
      <main>
      <ViewContent
          compListAll={compListAll}
          contentListAll={contentListAll}
          globals={globals}
        />
   {/* {compListAll && compListAll.length > 0 && compListAll.map((Itm, idx) => {
          
          if (contentListAll[idx] && contentListAll[idx].comp_content) {
            return (
              <div
                key={`itm-${idx}`}
                id={`${contentListAll[idx].comp_type}-${idx}`}
              >
                <Itm
                  content={contentListAll[idx].comp_content}
                  globals={globals}
                />
              </div>
            );
          } else {
            return <></>;
          }

        })} */}
      </main>
    </div>
  );
}
