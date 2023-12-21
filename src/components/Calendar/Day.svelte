<script lang="ts">
    
    import selectedYearStore from "../../stores/calendar/SelectedYearStore";
    import monthsStore from "../../stores/calendar/MonthsStore";
    import events from "../../calendarEvents.json"
    import dayModalStore from "../../stores/calendar/DayModalStore";

    export let month: number
    export let day: number

    $: weekday = new Date(`${$selectedYearStore} ${$monthsStore[month]} ${day}`).toLocaleDateString("da-dk", {weekday: "short"})

    const getUnixTime = (date: Date) => Math.floor(date.getTime() / 1000)


    $: event = events.events.filter((e) => 
    getUnixTime(new Date(`${$selectedYearStore} ${$monthsStore[month]} ${day}`)) >= getUnixTime(new Date(`${e.startDate.split("-")[2]} ${e.startDate.split("-")[1]} ${e.startDate.split("-")[0]}`)) && 
    getUnixTime(new Date(`${$selectedYearStore} ${$monthsStore[month]} ${day}`)) <= getUnixTime(new Date(`${e.endDate.split("-")[2]} ${e.endDate.split("-")[1]} ${e.endDate.split("-")[0]}`)))

    const listOfEventNames = (eventLst: any) => {
        let theList = eventLst.map((e: any) => e.name)
        if (theList.length > 1) {
            return `(${theList.length}): `+theList.join("; ")
        }
        return theList.join("; ")

    }

    const getWeekNumber = () => {
        var date = new Date(`${$selectedYearStore} ${$monthsStore[month]} ${day}`);
        date.setHours(0,0,0,0)
        date.setDate(date.getDate() +3 - (date.getDay() +6) % 7)
        var week1 = new Date(date.getFullYear(), 0, 4)
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() +6 ) % 7) / 7);
    }

    const convertToShorterWeekday = (weekday: string) => {
        if (weekday === "man.")       return "Ma"
        else if (weekday === "tirs.") return "Ti"
        else if (weekday === "ons.")  return "On"
        else if (weekday === "tors.") return "To"
        else if (weekday === "fre.")  return "Fr"
        else if (weekday === "lør.")  return "Lø"
        else                          return "Sø"
    }

</script>


<div class={weekday == "lør." ? ` bg-slate-200 flex w-full h-6` : weekday == "søn." ? ` bg-slate-400 flex w-full h-6` : ` bg-white flex h-6 w-full border-b-black border-b-[1px]`}>
    <div class=" min-w-[44px] max-w-[44px] bg-slate-800 text-gray-300 text-xs leading-6">
        <h1 class=" ml-1 inline-block">{day}.</h1>
        <h1 class=" mr-1 inline-block float-right">{convertToShorterWeekday(weekday)}</h1>
    </div> 
    {#if event == undefined}
        <h1 class=" mr-auto"> </h1>
    {:else}
        <button class=" ml-1 mr-auto truncate " on:click={() => dayModalStore.set({visible: true, event: event})} >{ listOfEventNames(event) }</button> <!--  day+"-"+month+"-"+$selectedYearStore -->
    {/if}
    {#if weekday == "man."}
        <h1 class=" mr-1 w-4 text-xs">{getWeekNumber()}</h1>
    {/if}
    
</div>