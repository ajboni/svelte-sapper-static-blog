<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main class="container mx-auto my-8">
  <slot />
</main>
