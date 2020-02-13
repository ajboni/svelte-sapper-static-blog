<script>
  export let segment;
  import { tags, tagFilter } from "../store.js";

  function filterByTag(tag) {
    tagFilter.set({ tag: tag });
  }
</script>

<div class="flex flex-row sm:flex-col ">

  <div class="">
    <a rel="prefetch" class:selected={segment === undefined} href=".">home</a>
  </div>
  <div class="">
    <a class:selected={segment === 'about'} href="about">about</a>
  </div>

  <div class="">TagList</div>
  {#each $tags as tag}
    <div on:click={filterByTag(tag)} class="">{tag}</div>
  {/each}
</div>
