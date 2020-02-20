<script>
  export let post;
  const date = post.data.date ? new Date(post.data.date) : null;
  const tags = post.data.tags ? post.data.tags : null;
  let shortDate = isValidDate(date) ? date.toLocaleDateString() : "";
  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }
</script>

<div class="text-gray-600">
  {#each tags as tag}
    <span class="text-sm bg-purple-600 text-white p-1 mr-1 text-sm rounded-sm">
      {tag}
    </span>
  {/each}

  {#if post.data.author && post.data.author.name}
    <span class="text-sm ">{post.data.author.name}</span>
  {/if}

  {#if post.data.author && post.data.author.links}
    {#each post.data.author.links as link}
      <a href={link.url} target="__blank" class="">
        <i class={link.icon} />
      </a>
    {/each}
  {/if}
  ・
  <span class="text-sm">{shortDate}</span>
  <hr class="mb-8 mt-4" />
</div>
