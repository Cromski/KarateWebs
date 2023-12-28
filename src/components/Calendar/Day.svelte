<script lang="ts">
    
    import selectedYearStore from "../../stores/calendar/SelectedYearStore";
    import monthsStore from "../../stores/calendar/MonthsStore";
    import dayModalStore from "../../stores/calendar/DayModalStore";
    import EventStore from "../../stores/calendar/EventStore";
    import moment from 'moment'

    export let month: number
    export let day: number

    $: weekday = moment(`${$selectedYearStore} ${$monthsStore[month]} ${day}`).format('ddd')

    $: event = $EventStore.filter((e) => 
    moment(`${$selectedYearStore} ${$monthsStore[month]} ${day}`) >= moment(e?.date1.substring(0, 10)) && 
    moment(`${$selectedYearStore} ${$monthsStore[month]} ${day}`) <= moment(e?.date2.substring(0, 10)))

    //$: console.log(event, $EventStore)

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
        else                          return "Søn"
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
    {/if}
    {#if weekday == "Mon"}
        <h1 class=" mr-1 w-4 text-xs">{getWeekNumber()}</h1>
    {/if}
    
</div>