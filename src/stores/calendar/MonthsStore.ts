import { readable } from 'svelte/store';

const months = readable(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]);

export default months;