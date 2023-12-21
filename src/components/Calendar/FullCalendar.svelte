<script lang="ts">

    import Month from "./Month.svelte";

    import selectedMonthsStore from "../../stores/calendar/SelectedMonthsStore";
    import selectedYearStore from "../../stores/calendar/SelectedYearStore";
    import monthsStore from "../../stores/calendar/MonthsStore";
    import FullDayModal from "./FullDayModal.svelte";

    const daysInMonth = [31, new Date().getFullYear() == 366 ? 29 : 28,31,30,31,30,31,31,30,31,30,31];

    const viewSizes = [
        {name: "half screen", value: 50},
        {name: "3 quarters", value: 75},
        {name: "full screen", value: 100},
    ]

    let viewSize = 75

    const updateSelectedMonths = (month: number) => {
        if ($selectedMonthsStore.includes(month)) {
            selectedMonthsStore.update((value) => {
                return value.filter((m) => m !== month).sort((a, b) => a-b)
            })
        } else {
            selectedMonthsStore.update((value) => {
                return [...value, month].sort((a, b) => a-b);
            })
        }
    }

    const updateViewSize = (newValue: number) => {
        viewSize = newValue
    }

</script>

{#each Array(2) as _, i}
    <button on:click={() => selectedYearStore.set(new Date().getFullYear()+i)}>{new Date().getFullYear()+i}</button>
{/each}

{#each $monthsStore as month, i}
    <button on:click={() => updateSelectedMonths(i)}>{month}</button>
{/each} 

{#each viewSizes as viewSize}
    <button on:click={() => updateViewSize(viewSize.value)}>{viewSize.name}</button>
{/each}

<div style={`width: ${viewSize}%`} class=" relative mx-auto flex justify-center">
    {#each $selectedMonthsStore as month}
        <Month month={month} daysInMonth={daysInMonth[month]} />
    {/each}
    <FullDayModal />
</div>


<!-- <h1>{selectedMonths}</h1> -->
<!-- <h1>{bing}</h1> -->