import { writable, derived, get } from "svelte/store";
export let posts = writable([]);
export let tags = writable([]);
export let tagFilter = writable({});
export let pageInfo = writable({});
