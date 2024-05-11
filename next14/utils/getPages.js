import { defOpts } from "../../constants/defOpts";

  /**
   * @name getPages
   * @param {string} slug
   * @param {{ContentOptions}} options
   * @returns
*/
export async function getPages(slug, opts) {
const options = {
    ...defOpts,
    ...opts,
};

const { signal } = new AbortController();
const API_BASE = options.api_url;

let getSlug = "index";
if (slug !== "/" && slug !== undefined) {
    getSlug = slug;
}

let isPreview = false;

if (Array.isArray(getSlug)) {
    if (getSlug[0] === "preview") {
    if (getSlug[2]) {
        isPreview = {
        slug: getSlug[1],
        page: false,
        comp: getSlug[2],
        };
        getSlug = getSlug[1];
    } else {
        isPreview = {
        slug: getSlug[1],
        page: true,
        comp: false,
        };
        getSlug = getSlug[1];
    }

    draftMode().enable();
    }

    if (getSlug[0] === "assets") {
    return;
    }
}

const URL = `${API_BASE}/pages/${getSlug}`;
try {
    const res = await fetch(URL, {
    signal: signal,
    cache: isPreview ? "no-store" : options.cache,
    referrer: options.referrer,
    });

    const data = await res.json();

    return {
    data,
    isPreview,
    title: data[0]?.page_title,
    content: data[0]?.page_content,
    };
} catch (err) {
    console.log("err: ", err)
    return null
}
}
