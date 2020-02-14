<script>
  export let post;
  const date = post.data.date ? new Date(post.data.date) : null;
  const tags = post.data.tags;
  let shortDate = isValidDate(date) ? date.toLocaleDateString() : "";

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }
</script>

<div
  class=" bg-gray-100 flex flex-col mb-10 border-2 rounded-md py-8 shadow-lg
  px-16 text-lg leading-relaxed">
  <a class="text-3xl" rel="prefetch" href={post.data.slug}>{post.data.title}</a>

  <div>
    {#each tags as tag}
      <span
        class="text-sm bg-purple-600 text-white p-1 mr-1 text-sm rounded-sm">
        {tag}
      </span>
    {/each}
    ・
    <span class="text-sm text-gray-600" rel="prefetch">{shortDate}</span>

  </div>
  <div class="my-4">
    {@html post.excerpt}
    <br />
    <div class="text-right text-purple-600 hover:text-purple-700">
      <a href={post.data.slug}>Read more...</a>
      <i class="fa fa-chevron-circle-right" />
    </div>
  </div>
</div>
