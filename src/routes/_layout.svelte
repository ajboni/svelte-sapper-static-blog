<script>
  import Sidebar from "./_sidebar.svelte";
</script>

<div class="min-h-screen md:flex">
  <!-- intermediary wrapper -->
  <div class="flex-none w-full md:max-w-xs bg-orange-400 text-white">
    <!-- sidebar -->
    <Sidebar />
  </div>

  <!-- non-sidebar -->
  <main class="flex-1 p-4 bg-green-100">
    <slot />
  </main>
</div>
