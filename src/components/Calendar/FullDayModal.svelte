<script lang="ts">
    import { clickOutside } from "../../Extra/ClickOutside.js";

    

    import dayModalStore from "../../stores/calendar/DayModalStore";

    const handleClickOutside = () => {
        dayModalStore.set({visible: false, event: []});
    }

    $: vis = $dayModalStore.visible

</script>

{#if vis}
<div use:clickOutside on:click_outside={handleClickOutside} class=" fixed md:absolute bg-white w-[75%] md:w-[40%] left-1/2 -translate-x-1/2 h-[30%] top-60 md:top-32 border-b-black border-[1px] rounded">
    {#each $dayModalStore.event as e}
        <h1 class="  ">{e.title}</h1>
    {/each}
</div>
{/if}