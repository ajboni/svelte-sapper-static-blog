<script>
  import PostListView from "./_postListView.svelte";
  import { posts, tagFilter } from "../store.js";
  console.log($tagFilter);
</script>

<!-- <div class="max-w-full"> -->
<div class="text-4xl pb-8 text-center font-medium">
  Recent Posts {$tagFilter.tag ? 'by ' + $tagFilter.tag : ''}
</div>

<ul>
  {#each $posts as post}
    <li>
      <PostListView {post} />

    </li>
  {/each}
</ul>
<!-- </div> -->
