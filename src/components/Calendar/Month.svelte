<script lang="ts">

    import Day from "./Day.svelte";
    import selectedMonthsStore from "../../stores/calendar/SelectedMonthsStore";
    import monthsStore from "../../stores/calendar/MonthsStore";

    export let month: number
    export let daysInMonth: number


</script>

<div style={`width: ${100/$selectedMonthsStore.length}%`}>
    <div class=" h-9 bg-slate-500 border-spacing-4 border-amber-500 b-6">
        <h1 class=" text-center leading-9">{$monthsStore[month]}</h1>
    </div>
    <div>
        {#each Array(daysInMonth) as _, i}
            <Day month={month} day={i+1} />
        {/each}
            
    </div>
</div>