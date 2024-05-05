"use client";

import { composeContent } from "../utils/composeContent";
import { ViewContent } from "./ViewContent";

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
      </main>
    </div>
  );
}
