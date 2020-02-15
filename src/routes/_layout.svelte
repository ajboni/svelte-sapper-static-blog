<script>
  import Sidebar from "./_sidebar.svelte";
  export let segment;
</script>

<div class="min-h-screen md:flex bg-gray-800">
  <!-- intermediary wrapper -->
  <div
    class="md:h-screen lg:top-0 lg:sticky flex-none w-full md:w-64 text-white ">
    <!-- sidebar -->
    <Sidebar {segment} />
  </div>

  <!-- non-sidebar -->
  <main class="flex-1 bg-gray-300 sm:p-0 md:p-8 lg:p-8">
    <slot />
  </main>
</div>
