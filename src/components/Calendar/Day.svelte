<script lang="ts">
    
    import selectedYearStore from "../../stores/calendar/SelectedYearStore";
    import monthsStore from "../../stores/calendar/MonthsStore";
    import dayModalStore from "../../stores/calendar/DayModalStore";
    import EventStore from "../../stores/calendar/EventStore";
    import moment from 'moment'

    export let month: number
    export let day: number

    $: weekday = moment(`${$selectedYearStore}/${$monthsStore[month]}/${day}`).format('ddd')
    $: console.log("weee: " + weekday)
    
    $: event = $EventStore.filter((e) => 
        moment(`${$selectedYearStore} ${$monthsStore[month]} ${day}`).isBetween(moment(e?.date1).add(-1,'days'), moment(e?.date2).add(1,'days')))
    
    // $EventStore.forEach((e) => console.log(`this date: ${moment(`${$selectedYearStore} ${$monthsStore[month]} ${day}`).format("MMM Do YY")} \n is between: ${moment(e?.date1).format("MMM Do YY")} and \n ${moment(e?.date2).format("MMM Do YY")}`))

    const listOfEventNames = (eventLst: any) => {
        let theList = eventLst.map((e: any) => e.title)
        if (theList.length > 1) {
            return `(${theList.length}): `+theList.join("; ")
        }
        return theList.join("; ")

    }

    const getWeekNumber = () => moment(`${$selectedYearStore} ${$monthsStore[month]} ${day}`).week()

    const convertToShorterWeekday = (weekday: string) => {
        if (weekday === "Mon")       return "Ma"
        else if (weekday === "Tue") return "Ti"
        else if (weekday === "Wed")  return "On"
        else if (weekday === "Thu") return "To"
        else if (weekday === "Fri")  return "Fr"
        else if (weekday === "Sat")  return "Lø"
        else                          return "Sø"
    }

</script>


<div class={weekday == "Sat" ? `text-textColor bg-slate-200 flex w-full h-6` : weekday == "Sun" ? `text-textColor bg-slate-400 flex w-full h-6` : ` bg-white flex h-6 w-full border-b-black border-b-[1px]`}>
    <div class=" min-w-[44px] max-w-[44px] bg-slate-800 text-gray-300 text-xs leading-6">
        <h1 class=" ml-1 inline-block">{day}.</h1>
        <h1 class=" mr-1 inline-block float-right">{convertToShorterWeekday(weekday)}</h1>
    </div> 
    {#if event == undefined}
        <h1 class=" mr-auto"> </h1>
    {:else}
        <button class=" ml-1 mr-auto truncate text-textColor " on:click={() => dayModalStore.set({visible: true, event: event})} >{ listOfEventNames(event) }</button> <!--  day+"-"+month+"-"+$selectedYearStore -->
        <h1>{weekday}</h1>
    {/if}
    {#if weekday == "Mon"}
        <h1 class=" mr-1 w-4 text-xs">{getWeekNumber()}</h1>
    {/if}
    
</div>