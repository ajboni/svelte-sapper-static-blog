import { writable, derived } from "svelte/store";
export let posts = writable([]);
export let tags = writable([]);
export let tagFilter = writable({});
export let pageInfo = writable({});

export async function fetchPosts(params) {
  const url = new URL("/index.json", $pageInfo.host);
  url.search = new URLSearchParams(params).toString();
  const res = await this.fetch(url);
  const json = await res.json();
  posts.set(json.contents);
  tags.set(json.tags);
  pageInfo.set(page);
  return res;
}
