<script>
  export let segment;
  import { tags, tagFilter, fetchPosts } from "../store.js";
  import { preload } from "./index.svelte";

  function filterByTag(tag) {
    tagFilter.set({ tag: tag });
  }

  function clearTagFilter() {
    tagFilter.set({});
  }
  const sidebarBtnClass = "w-full text-center p-2 hover:bg-purple-500 ";
</script>

<div
  class="flex flex-row sm:flex-col items-center flex-grow h-full justify-center
  text-2xl">

  <a
    class={sidebarBtnClass + ' ' + (segment === undefined ? 'bg-purple-500' : '')}
    rel="prefetch"
    href=".">
    Home
  </a>

  <a
    class={sidebarBtnClass + ' ' + (segment === 'about' ? 'bg-purple-500' : '')}
    href="about">
    About
  </a>

  <div
    class={'flex w-4/6 justify-around flex-wrap ' + ' ' + (segment === undefined ? '' : 'invisible')}>

    <!-- If we have at least 2 tags, add option to remove filter -->
    {#if $tags.length > 2}
      <div
        on:click={clearTagFilter}
        class="text-sm bg-purple-600 mx-1 my-1 text-white px-2 py-1 text-sm
        rounded-sm cursor-pointer">
        clear
      </div>
    {/if}

    {#each $tags as tag}
      <div
        on:click={filterByTag(tag)}
        class="text-sm bg-purple-600 text-white mx-1 my-1 px-2 py-1 text-sm
        rounded-sm cursor-pointer">
        {tag}
      </div>
    {/each}
  </div>

</div>
