<script context="module">
  import PostListView from "./_postListView.svelte";

  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="text-3xl">Recent posts</div>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <PostListView {post} />

    </li>
  {/each}
</ul>
