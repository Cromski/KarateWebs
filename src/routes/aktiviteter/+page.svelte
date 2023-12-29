<script lang="ts">
    import FullCalendar from "../../components/Calendar/FullCalendar.svelte";
    import AddToEvents from "../../components/Calendar/AddToEvents.svelte";
    import EventStore from "../../stores/calendar/EventStore";
    import TrainingTimes from "../../components/TrainingTimes.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        EventStore.init();
        console.log("events, inited")
    })

</script>

<div class="my-7">
    <TrainingTimes />
</div>
<FullCalendar />
<AddToEvents />