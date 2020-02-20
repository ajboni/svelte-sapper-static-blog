<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import PostInfo from "./postInfo.svelte";
  export let post;
</script>

<style>
  .post-content :global(p) {
    @apply leading-relaxed mb-4;
  }
  .post-content :global(h1) {
    @apply text-4xl mb-6 font-thin;
  }

  .post-content :global(h2) {
    @apply text-2xl mt-4 mb-6 font-thin;
  }
  .post-content :global(h3) {
    @apply text-xl my-4 font-thin;
  }
  .post-content :global(code) {
    @apply break-words whitespace-pre-line;
  }
</style>

<svelte:head>
  <title>{post.data.title}</title>
</svelte:head>

<div
  class=" bg-gray-100 flex flex-col border-2 rounded-md shadow-lg px-8 py-8
  sm:py-16 sm:px-16 text-lg leading-relaxed w-full break-words">

  <h1 class="text-4xl font-thin">{post.data.title}</h1>
  <PostInfo {post} />
  <div class="post-content">
    {@html post.content}
  </div>
</div>
