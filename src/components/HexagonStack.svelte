<script lang="ts">
    import Hexagon from '../components/Hexagon.svelte';
    import MediaQuery from 'svelte-media-queries'
  
</script>

<div class="  w-[320px] grid grid-cols-2 [&>*:nth-child(3)]:col-span-2 lg:[&>*:nth-child(3)]:col-span-1 "> <!-- was sm -->

    <MediaQuery query='(min-width: 1024px)' let:matches> <!-- was 641 -->
        {#if matches}
        <Hexagon right={160} mt={0} text="Aktiviteter" imgPath="/karates.jpg" path={"/aktiviteter"} />
        <Hexagon right={160} mt={0} text="Om karate" imgPath="/karates.jpg" path={"/om-karate"} />
        <Hexagon right={80} mt={24} text="Kontakt os" imgPath="/karates.jpg" path={"/kontakt-os"} />
        <Hexagon right={80} mt={24} text="Nyheder" imgPath="/karates.jpg" path={"/nyheder"} />
        <Hexagon right={0} mt={24} text="Bliv medlem" imgPath="/karates.jpg"  path={"/bliv-medlem"} />
        <Hexagon right={0} mt={24} text="Galleri" imgPath="/karates.jpg"  path={"/galleri"} />
        {/if}
    </MediaQuery>

    <MediaQuery query='(max-width: 1023px)' let:matches> <!-- was 640 -->
        {#if matches}
        <Hexagon right={0} mt={0} text="Aktiviteter" imgPath="/karates.jpg" path={"/aktiviteter"} />
        <Hexagon right={0} mt={0} text="Om karate" imgPath="/karates.jpg" path={"/om-karate"} />
        <Hexagon right={80} mt={24} text="Kontakt os" imgPath="/karates.jpg" path={"/kontakt-os"} />
        <Hexagon right={0} mt={24} text="Nyheder" imgPath="/karates.jpg" path={"/nyheder"} />
        <Hexagon right={0} mt={24} text="Bliv medlem" imgPath="/karates.jpg"  path={"/bliv-medlem"} />
        <Hexagon right={80} mt={24} text="Galleri" imgPath="/karates.jpg"  path={"/galleri"} />
        {/if}
    </MediaQuery>


</div>


