<script context="module">
  import { posts, tags, pageInfo, tagFilter } from "../store.js";
  import { get } from "svelte/store";

  function filterByTag(arr, tag) {
    if (!tag || tag === "") {
      return arr;
    }
    arr = arr.filter(a => a.data.tags.includes(tag));
    return arr;
  }

  export async function preload({ host, path, params, query }) {
    const res = await this.fetch("index.json");
    const json = await res.json();
    const processedPosts = filterByTag(json.contents, query.tag);
    posts.set(processedPosts);
    tags.set(json.tags);
    tagFilter.set(query.tag);
    pageInfo.set({ host, path, params, query });
    return res;
  }
</script>

<script>
  // import { tagFilter } from "../store.js";
  import PostList from "./_postList.svelte";
  import Spinner from "./_spinner.svelte";
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#if $preloading}
  <Spinner caption="Loading posts..." />
{:else}
  <PostList />
{/if}
