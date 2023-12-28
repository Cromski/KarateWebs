import { writable } from "svelte/store";
import moment from 'moment'

const selectedMonths = writable(moment().month() < 6 ? [0,1,2,3,4,5] : [6,7,8,9,10,11]);

export default selectedMonths;