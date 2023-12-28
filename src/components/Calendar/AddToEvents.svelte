<script lang="ts">
    import { createEvent } from "../../data/events";
    import EventStore from "../../stores/calendar/EventStore";
    import moment from 'moment'

    let today = moment()
    let tomorrow = moment().add(1,'days');
    const formatDate = (date: Moment) => `${date.year()}-${date.month()+1}-${date.date()}`

    let title: string = "sd"
    let date1: string;
    let date2: string;

    //$: today, console.log(today.toISOString())
    $: today, date1 = formatDate(today)
    $: tomorrow, date2 = formatDate(tomorrow)

    $: console.log(date1)
    $: console.log(date2)

    let item: object;
    
    $: date2, item = {
        club: "BSI",
        title: title,
        date1: moment(date1).toISOString(),
        date2: moment(date2).toISOString()
    }

    const createEventAux = async () => {
        await createEvent(item)
        EventStore.init()
    }

</script>

<div >
    <input type="text" bind:value={title} />
    <input type="date" bind:value={date1} />
    <input type="date" bind:value={date2} />
    <button class=" bg-textColor" on:click={() => createEventAux()}>Add</button>
</div>