<script lang="ts">
    import Hexagon from '../components/Hexagon.svelte';
    import MediaQuery from 'svelte-media-queries'
  
</script>

<div class="  w-[320px] grid grid-cols-2 [&>*:nth-child(3)]:col-span-2 lg:[&>*:nth-child(3)]:col-span-1 "> <!-- was sm -->

    <MediaQuery query='(min-width: 1024px)' let:matches> <!-- was 641 -->
        {#if matches}
        <Hexagon right={160} mt={0} text="Aktiviteter" imgPath="/karates.jpg" value={1} />
        <Hexagon right={160} mt={0} text="Aktiviteter" imgPath="/karates.jpg" value={2} />
        <Hexagon right={80} mt={24} text="Aktiviteter" imgPath="/karates.jpg" value={3} />
        <Hexagon right={80} mt={24} text="Aktiviteter" imgPath="/karates.jpg" value={4} />
        <Hexagon right={0} mt={24} text="Aktiviteter" imgPath="/karates.jpg"  value={5} />
        <Hexagon right={0} mt={24} text="Aktiviteter" imgPath="/karates.jpg"  value={6} />
        {/if}
    </MediaQuery>

    <MediaQuery query='(max-width: 1023px)' let:matches> <!-- was 640 -->
        {#if matches}
        <Hexagon right={0} mt={0} text="Aktiviteter" imgPath="/karates.jpg" value={1} />
        <Hexagon right={0} mt={0} text="Aktiviteter" imgPath="/karates.jpg" value={2} />
        <Hexagon right={80} mt={24} text="Aktiviteter" imgPath="/karates.jpg" value={3} />
        <Hexagon right={0} mt={24} text="Aktiviteter" imgPath="/karates.jpg" value={4} />
        <Hexagon right={0} mt={24} text="Aktiviteter" imgPath="/karates.jpg"  value={5} />
        <Hexagon right={80} mt={24} text="Aktiviteter" imgPath="/karates.jpg"  value={6} />
        {/if}
    </MediaQuery>


</div>


