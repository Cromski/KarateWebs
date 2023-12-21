import { writable } from "svelte/store";

const selectedYear = writable(new Date().getFullYear());

export default selectedYear;