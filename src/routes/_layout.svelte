<script>
  import Sidebar from "./_sidebar.svelte";
  export let segment;
</script>

<div class="min-h-screen md:flex">
  <!-- intermediary wrapper -->
  <div
    class="md:h-screen md:top-0 md:sticky flex-none w-full md:max-w-xs
    bg-gray-800 text-white ">
    <!-- sidebar -->
    <Sidebar {segment} />
  </div>

  <!-- non-sidebar -->
  <main class="flex-1 p-8 bg-gray-300">
    <slot />
  </main>
</div>
