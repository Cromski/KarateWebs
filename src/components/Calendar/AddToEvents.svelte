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

    let title: string = "sd"
    let date1: string;
    let date2: string;
    let secondDate

    //$: today, console.log(today.toISOString())
    $: realDate1, date1 = formatDate(realDate1)
    $: realDate2, date2 = formatDate(realDate2)

    $: date1, realDate1.set(moment(date1, "YYYY-MM-DD").toObject())
    $: date2, realDate2.set(moment(date2, "YYYY-MM-DD").toObject())
    
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
        await createEvent(item)
        EventStore.init()
    }

</script>

<div >
    <input type="text" bind:value={title} />
    <input type="date" bind:value={date1} on:change={() => secondDate.focus()} />
    <input type="date" bind:value={date2} min={date1} bind:this={secondDate} />
    <button class=" bg-textColor" on:click={() => createEventAux()}>Add</button>
</div>