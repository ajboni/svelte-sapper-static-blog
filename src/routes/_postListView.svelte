<script>
  export let post;
  const date = new Date(post.data.date);
  let shortDate = isValidDate(date) ? date.toLocaleDateString() : "";

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }
</script>

<div class="flex flex-col mb-4">
  <a class="text-3xl" rel="prefetch" href={post.data.slug}>{post.data.title}</a>
  <a class="text-sm" rel="prefetch" href={post.data.date}>{shortDate}</a>

  <div class="my-4">
    {@html post.excerpt}
  </div>
</div>
