# CH CH CHANGES 

This is the changelog for [ez-content](https://github.com/ez-content/ez-content), 
a javascript package created for [ezcontent.io](https://www.ezcontent.io/)

## 2024-07-07

> v1.0.31-33 via @jafstar

- Fix EZParagraph bug
- Add checkRevalidation with revalidatePath
- Add EZ_HASH env var for custom revalidate path
- Now allows getContent to accept options for "hash", overrides EZ_HASH


## 2024-07-05

> v1.0.17-30 via @jafstar

- Add EZ_CACHE env var for revalidate options "force-cache" | "no-store"
- Add EZ_FRESH for revalidate timeout, defaults to 3600/1hr
- Add test of Base components EZTitle, EZParagraph, EZImage 
- Add ez-content/EZHTML for general template use, allows for paragraph break tags

## 2024-05-11

> v1.0.10-16 via @jafstar

- Update API URL
- Add ViewContent, again
- Add back draftMode()
- Add constants/defOpts folder and file
- Destructure getContent into getPages and getGlobals
- Remove import error
- Update ReadMe with ViewContent from package

## 2024-05-08

> v1.0.9 via @jafstar

- Fix try/catch error response with plain text.

## 2024-05-05 

> v1.0.6-8 via @jafstar

- Wow it seems ViewContent does not play well importing dynamic components from the node_modules folder. Perhaps a system permission issue, need more research.

> v1.0.5

- Adjust imports in attempt to fix ViewContent issue with Unexpected token

> v1.0.4

- Add composeContent for granular control in a view-page.js file
- Add ViewContent also for granular control in a case where a Header or Footer would be added

> v1.0.3

- Fix file path and variable name

> v1.0.2 

- Added this changelog file!
- Added ability to adjust api url
- Added new .env var EZ_TOKEN
- Update folder structure

## 2024-05-04 

> v1.0.1 via @jafstar

- Created Repo!
- Added to [NPM](https://www.npmjs.com/package/ez-content)
- Added new files getContent, ViewPage
