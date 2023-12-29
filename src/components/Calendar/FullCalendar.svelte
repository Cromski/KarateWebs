<script lang="ts">

    import Month from "./Month.svelte";

    import selectedMonthsStore from "../../stores/calendar/SelectedMonthsStore";
    import selectedYearStore from "../../stores/calendar/SelectedYearStore";
    import monthsStore from "../../stores/calendar/MonthsStore";
    import FullDayModal from "./FullDayModal.svelte";
    import eventsStore from "../../stores/calendar/EventStore";
    import MediaQuery from 'svelte-media-queries'
    import moment from 'moment'
    
    const viewSizes = [
        {name: "1/2", value: 50},
        {name: "3/4", value: 75},
        {name: "1/1", value: 100},
    ]

    let viewSize = 75
    let defaultYear = moment().year()

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

    const setSelectedYear = (newVal: number) => {
        selectedYearStore.set(newVal)
        $selectedYearStore = $selectedYearStore
    }

</script>

<h1 class=" text-5xl ml-32 font-bold text-textColor">Kalender</h1>

<div class="flex ml-44 my-6 gap-7">
    <input class="py-2 px-4 w-24 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="number" min="2023" bind:value={defaultYear} on:change={() => setSelectedYear(defaultYear)}>

    <div class="grid grid-cols-4 gap-4">
        {#each $monthsStore as month, i}
          <button
            on:click={() => updateSelectedMonths(i)}
            class="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            {month}
          </button>
        {/each}
      </div>
</div>

<MediaQuery query='(max-width: 767px)' let:matches> <!-- mobile -->
    {#if matches}
        <div class=" w-full [overflow:overlay] ">
            <div style={`width: 800px`} class=" flex">
                {#each $selectedMonthsStore as month}
                    <Month month={month} />
                {/each}
                <FullDayModal />
            </div>
        </div>
    {/if}
</MediaQuery>


<MediaQuery query='(min-width: 768px)' let:matches> <!-- pc -->
    {#if matches}
        {#each viewSizes as viewSize}
            <button class=" my-6 py-2 px-4 float-right border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 hover:bg-gray-100" on:click={() => updateViewSize(viewSize.value)}>{viewSize.name}</button>
        {/each}
        <div style={`width: ${viewSize}%`} class=" relative mx-auto flex justify-center">
            {#each $selectedMonthsStore as month}
                <Month month={month} />
            {/each}
            <FullDayModal />
        </div>
    {/if}
</MediaQuery>




<!-- <h1>{selectedMonths}</h1> -->
<!-- <h1>{bing}</h1> -->