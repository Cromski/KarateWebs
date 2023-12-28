import { writable } from "svelte/store";
import moment from 'moment'

const selectedYear = writable(moment().year());

export default selectedYear;