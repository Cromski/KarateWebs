<script lang="ts">
    import FullCalendar from "../../components/Calendar/FullCalendar.svelte";
    import AddToEvents from "../../components/Calendar/AddToEvents.svelte";
    import EventStore from "../../stores/calendar/EventStore";
    import { onMount } from "svelte";

    onMount(() => {
        EventStore.init();
    })

</script>

<AddToEvents />
<FullCalendar />