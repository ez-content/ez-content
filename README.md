# EZ Content

## Introduction

This package is to retrieve data from [ezcontent.io](ezcontent.io) and display React components in a Next.js v14 application.

## Install

> npm install ez-content

> yarn add ez-content

## .env File

``` EZ_TOKEN="your_token_goes_here" ```


## Example
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

## Notes

- component directory must be in the root


More coming soon