# EZ Content

## Introduction

This package is to retrieve data from [ezcontent.io](ezcontent.io) and display React components in a Next.js v14 application.

## Install

> npm install ez-content

> yarn add ez-content

## .env File

``` EZ_TOKEN="your_token_goes_here" ```


## Example 1 - Standard Use
> app/page.js
```
"use server";
import { ViewPage, getContent } from "ez-content";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { title } = await getContent(params.slug);

  return {
    title: title,
  };
}
export default async function Page({ params }) {
  const { content, globals } = await getContent(params.slug);

  if (content) return <ViewPage content={content} globals={globals} />;
  else notFound();
}
```

## Example 2 - Static Headers/Footers

Use composeContent and ViewContent to add Static Headers that are disabled in the EZ Content editor.

### Step 1

> app/view-page.js

```
"use client";

import { composeContent, ViewContent } from "ez-content";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function SlugPage({ content, globals, isPreview }) {
  const { compListAll, contentListAll } = composeContent(
    content,
    globals,
    isPreview
  );

  return (
    <div>
      {!isPreview && <Header globals={globals} />}
      <main>
        <ViewContent
          components={compListAll}
          content={contentListAll}
          globals={globals}
        />
      </main>
      {!isPreview && <Footer globals={globals} />}
    </div>
  );
}
```

### Step 2

> @/components/ViewContent.js

```
"use client";

const ViewContent = ({ components, content, globals }) => {
  const list = components.filter((_, idx) => content[idx].comp_content);
  return (
    <div>
      {list.map((Itm, i) => (
        <Itm
          key={`itm-${i}`}
          id={`${content[i].comp_type}-${i}`}
          content={content[i].comp_content}
          globals={globals}
        />
      ))}
    </div>
  );
};

export { ViewContent as default };
```

## Notes

- component directory must be in the root


More coming soon