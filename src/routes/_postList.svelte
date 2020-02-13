<script>
  import PostListView from "./_postListView.svelte";
  import { posts } from "../store.js";
  console.log($posts);
</script>

<!-- <div class="max-w-full"> -->
<div class="text-4xl text-center pb-4">Recent Posts</div>
<ul>
  {#each $posts as post}
    <li>
      <PostListView {post} />

    </li>
  {/each}
</ul>
<!-- </div> -->
