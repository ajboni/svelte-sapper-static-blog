<script>
  export let segment;
  import { tags, tagFilter } from "../store.js";
  import { goto } from "@sapper/app";
  function filterByTag(tag) {
    tagFilter.set({ tag: tag });
  }

  function clearTagFilter() {
    tagFilter.set({});
  }
  const sidebarBtnClass =
    "w-1/4 sm:w-full text-center p-2 hover:bg-purple-500 ";
</script>

<div
  class="flex flex-row sm:flex-col items-center flex-grow h-full justify-start
  sm:justify-center text-2xl">

  <a
    class={sidebarBtnClass + ' ' + (segment === undefined ? 'bg-purple-500' : '')}
    href=".">
    Home
  </a>

  <a
    class={sidebarBtnClass + ' ' + (segment === 'about' ? 'bg-purple-500' : '')}
    href="about">
    About
  </a>

  <div
    class={'hidden sm:flex w-full my-2 sm:w-4/6 justify-center flex-wrap ' + ' '}>

    <!-- If we have at least 2 tags, add option to remove filter -->
    {#if $tags.length > 2}
      <a
        class="text-sm bg-purple-600 text-white mx-1 my-1 px-2 py-1 text-sm
        rounded-sm cursor-pointer"
        href="/">
        all
      </a>
    {/if}

    {#each $tags as tag}
      <a
        class="text-sm bg-purple-600 text-white mx-1 my-1 px-2 py-1 text-sm
        rounded-sm cursor-pointer"
        href="/?tag={tag}">
        {tag}
      </a>
    {/each}
  </div>

</div>
