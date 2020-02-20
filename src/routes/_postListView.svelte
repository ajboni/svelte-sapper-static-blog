<script>
  import PostInfo from "./postInfo.svelte";
  export let post;
</script>

<div
  class=" bg-gray-100 flex flex-col mb-10 border-2 rounded-md py-8 shadow-lg
  px-16 text-lg leading-relaxed">
  <a class="text-3xl" rel="prefetch" href={post.data.slug}>{post.data.title}</a>
  <PostInfo {post} />
  <div class="my-4">
    {@html post.excerpt}
    <br />
    <div class="text-right text-purple-600 hover:text-purple-700">
      <a href={post.data.slug}>Read more...</a>
      <i class="fa fa-chevron-circle-right" />
    </div>
  </div>
</div>
