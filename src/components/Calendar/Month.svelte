<script lang="ts">

    import Day from "./Day.svelte";
    import selectedMonthsStore from "../../stores/calendar/SelectedMonthsStore";
    import selectedYearStore from "../../stores/calendar/SelectedYearStore";
    import monthsStore from "../../stores/calendar/MonthsStore";
    
    import moment from 'moment'

    export let month: number
    let daysInMonth: number;

    $: $selectedMonthsStore, daysInMonth = moment(`${$selectedYearStore}-${month+1}`, "YYYY-MM").daysInMonth()

</script>

<div style={`width: ${100/$selectedMonthsStore.length}%`}>
    <div class=" h-9 bg-slate-500 border-spacing-4 border-amber-500 b-6">
        <h1 class=" text-center text-textColor leading-9">{$monthsStore[month]}</h1>
    </div>
    <div>
        {#each Array(daysInMonth) as _, i}
            <Day month={month} day={i+1} />
        {/each}
            
    </div>
</div>