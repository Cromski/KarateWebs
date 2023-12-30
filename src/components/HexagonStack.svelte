<script lang="ts">
    import Hexagon from '../components/Hexagon.svelte';
    import MediaQuery from 'svelte-media-queries'
  
</script>

<div class="  w-[320px] grid grid-cols-2 [&>*:nth-child(3)]:col-span-2 lg:[&>*:nth-child(3)]:col-span-1 "> <!-- was sm -->

    <MediaQuery query='(min-width: 1024px)' let:matches> <!-- was 641 -->
        {#if matches}
        <Hexagon right={160} mt={0} text="Aktiviteter" imgPath="/karates.jpg" path={"/aktiviteter"} bgSize={300} x={-3} y={0} />
        <Hexagon right={160} mt={0} text="Om karate" imgPath="/karate-girl.jpg" path={"/om-karate"} bgSize={350} x={-6.5} y={-1} />
        <Hexagon right={80} mt={24} text="Kontakt os" imgPath="/282_282.jpg" path={"/kontakt-os"} bgSize={250} x={-2.5} y={0} />
        <Hexagon right={80} mt={24} text="Nyheder" imgPath="/bearded-karate-fighter.jpg" path={"/nyheder"} bgSize={300} x={0} y={-1} />
        <Hexagon right={0} mt={24} text="Bliv medlem" imgPath="/young-man-are-training.jpg"  path={"/bliv-medlem"} bgSize={250} x={-6} y={0} />
        <Hexagon right={0} mt={24} text="Galleri" imgPath="/shaved-head-karate.jpg"  path={"/galleri"} bgSize={250} x={-2} y={0} />
        {/if}
    </MediaQuery>

    <MediaQuery query='(max-width: 1023px)' let:matches> <!-- was 640 -->
        {#if matches}
        <Hexagon right={0} mt={0} text="Aktiviteter" imgPath="/karates.jpg" path={"/aktiviteter"} bgSize={300} x={-3} y={0} />
        <Hexagon right={0} mt={0} text="Om karate" imgPath="/karate-girl.jpg" path={"/om-karate"} bgSize={350} x={-6.5} y={-1} />
        <Hexagon right={80} mt={24} text="Kontakt os" imgPath="/282_282.jpg" path={"/kontakt-os"} bgSize={250} x={-2.5} y={0} />
        <Hexagon right={0} mt={24} text="Nyheder" imgPath="/bearded-karate-fighter.jpg" path={"/nyheder"} bgSize={300} x={0} y={-1} />
        <Hexagon right={0} mt={24} text="Bliv medlem" imgPath="/young-man-are-training.jpg"  path={"/bliv-medlem"} bgSize={250} x={-6} y={0} />
        <Hexagon right={80} mt={24} text="Galleri" imgPath="/shaved-head-karate.jpg"  path={"/galleri"} bgSize={250} x={-2} y={0} />
        {/if}
    </MediaQuery>


</div>


