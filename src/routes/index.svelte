<script>
  import { onMount } from "svelte";
  import { posts, fetchPosts, tagFilter } from "../store.js";
  import PostList from "./_postList.svelte";
  import Spinner from "./_spinner.svelte";
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#await fetchPosts($tagFilter)}
  <Spinner caption="Loading posts..." />
{:then value}
  <PostList />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
