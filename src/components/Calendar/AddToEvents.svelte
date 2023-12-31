<script lang="ts">
    import { createEvent } from "../../data/events";
    import EventStore from "../../stores/calendar/EventStore";
    import moment from 'moment-timezone'

    function zeroPad(number:number) {
        return number < 10 ? '0' + number : number;
    }

    let realDate1 = moment()
    let realDate2 = moment().add(1,'days');
    const formatDate = (date: Moment) => `${date.year()}-${zeroPad(date.month()+1)}-${zeroPad(date.date())}`

    let title: string = ""
    let date1: string;
    let date2: string;
    let secondDate; // second date input reference

    //$: today, console.log(today.toISOString())
    $: realDate1, date1 = formatDate(realDate1)
    $: realDate2, date2 = formatDate(realDate2)

    // $: date1, realDate1.set(moment(date1, "YYYY-MM-DD").toObject())
    // $: date2, realDate2.set(moment(date2, "YYYY-MM-DD").toObject())
    
    // $: date1, if (date1)

    $: console.log("date1: " + date1)
    $: console.log("date2: " + date2)
    $: console.log("realDate1: " + realDate1)
    $: console.log("realDate2: " + realDate2)

    let item: object;
    
    $: date2, item = {
        club: "BSI",
        title: title,
        date1: moment(date1).toISOString(),
        date2: moment(date2).toISOString()
    }

    const createEventAux = async () => {
        if (!item.title) {
            alert("ERROR - No event title.")
            return
        } else if (moment(date2).isBefore(moment(date1))) {
            alert("ERROR - Second date is earlier than first date.")
            return
        }

        await createEvent(item)
        title = ""
        date1 = formatDate(realDate1)
        date2 = formatDate(realDate2)
        EventStore.init()
    }

</script>
<!-- <div class="toast toast-top toast-center">
    <div class=" alert alert-success">
        <span>Message sent successfully.</span>
    </div>
    <div class=" alert alert-error">
        <span>Message sent successfully.</span>
    </div>
</div> -->

<div class=" w-1/2 md:w-3/12 mt-5 mx-auto flex flex-col space-y-4">
    <input class="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="text" bind:value={title} />
    <input class="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="date" bind:value={date1} min={'2023-01-01'} on:change={() => secondDate.focus()} />
    <input class="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="date" bind:value={date2} min={date1} bind:this={secondDate} />
    <button class="py-2 px-4 bg-backgroundLighter text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" on:click={() => createEventAux()}>Add</button>
</div>