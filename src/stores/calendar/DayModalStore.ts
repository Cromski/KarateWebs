import { writable } from 'svelte/store';

const dayModalStore = writable({
    visible: false,
    event: [],
});

export default dayModalStore;