<script lang="ts">
    import { createEvent } from "../../data/events";
    import EventStore from "../../stores/calendar/EventStore";

    let today = new Date()
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000))
    const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    let title: string = "sd"
    let date1: string
    let date2: string

    $: today, console.log(today.toISOString())
    $: today, date1 = formatDate(today)
    $: tomorrow, date2 = formatDate(tomorrow)

    let item;
    
    $: date2, item = {
        club: "BSI",
        title: title,
        date1: new Date(date1),
        date2: new Date(date2)
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