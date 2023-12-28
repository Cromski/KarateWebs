<script lang="ts">

    import Month from "./Month.svelte";

    import selectedMonthsStore from "../../stores/calendar/SelectedMonthsStore";
    import selectedYearStore from "../../stores/calendar/SelectedYearStore";
    import monthsStore from "../../stores/calendar/MonthsStore";
    import FullDayModal from "./FullDayModal.svelte";
    import eventsStore from "../../stores/calendar/EventStore";
    import MediaQuery from 'svelte-media-queries'
    import moment from 'moment'
    
    const daysInMonth = [31, moment(`${moment().year()}-02`, "YYYY-MM").daysInMonth(),31,30,31,30,31,31,30,31,30,31];

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
    <button on:click={() => selectedYearStore.set(moment().year()+i)}>{moment().year()+i}</button>
{/each}

{#each $monthsStore as month, i}
    <button on:click={() => updateSelectedMonths(i)}>{month}</button>
{/each} 

{#each viewSizes as viewSize}
    <button on:click={() => updateViewSize(viewSize.value)}>{viewSize.name}</button>
{/each}

<MediaQuery query='(max-width: 767px)' let:matches> <!-- was 641 -->
    {#if matches}
        <div class=" w-full [overflow:overlay] ">
            <div style={`width: 800px`} class=" relative mx-auto flex justify-center">
                {#each $selectedMonthsStore as month}
                    <Month month={month} daysInMonth={daysInMonth[month]} />
                {/each}
                <FullDayModal />
            </div>
        </div>
    {/if}
</MediaQuery>

<MediaQuery query='(min-width: 768px)' let:matches> <!-- was 641 -->
    {#if matches}
        <div style={`width: ${viewSize}%`} class=" relative mx-auto flex justify-center">
            {#each $selectedMonthsStore as month}
                <Month month={month} daysInMonth={daysInMonth[month]} />
            {/each}
            <FullDayModal />
        </div>
    {/if}
</MediaQuery>




<!-- <h1>{selectedMonths}</h1> -->
<!-- <h1>{bing}</h1> -->