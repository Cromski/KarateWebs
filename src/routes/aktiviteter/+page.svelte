<script lang="ts">
    import FullCalendar from "../../components/Calendar/FullCalendar.svelte";
    import AddToEvents from "../../components/Calendar/AddToEvents.svelte";
    import EventStore from "../../stores/calendar/EventStore";
    import TrainingTimes from "../../components/TrainingTimes.svelte";
    import { onMount } from "svelte";
    export let data;

    onMount(() => {
        EventStore.init();
        console.log("events, inited", data)
    })

</script>

<div class="my-7 text-textColor">
    <TrainingTimes />
</div>
<FullCalendar />
<AddToEvents />