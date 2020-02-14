<script context="module">
  import { posts, tags } from "../store.js";
  export async function preload(page, session) {
    const res = await this.fetch("index.json");
    const json = await res.json();
    posts.set(json.contents);
    tags.set(json.tags);
    return tags;
  }
</script>

<script>
  import { fetchPosts, tagFilter } from "../store.js";
  import PostList from "./_postList.svelte";
  import Spinner from "./_spinner.svelte";
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<!-- {#await fetchPosts($tagFilter)} -->
<!-- <Spinner caption="Loading posts..." /> -->
<!-- {:then value} -->
<PostList />
<!-- {:catch error} -->
<!-- <p>Something went wrong: {error.message}</p> -->
<!-- {/await} -->
