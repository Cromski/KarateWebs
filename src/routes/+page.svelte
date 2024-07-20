<script lang="ts">
    import tilt from 'svelte-tilt'
    import Collage from '../components/Collage.svelte';
    import HexagonStack from '../components/HexagonStack.svelte';
    import Nyheder from '../components/Nyheder.svelte';
    import MediaQuery from 'svelte-media-queries'
    import { onMount } from "svelte";
    import NewsStore from '../stores/news/NewsStore';

    onMount(() => {
        NewsStore.init();
        console.log("news, inited")
    })

</script>

<div class=" grid grid-cols-1 sm:grid-cols-2 gap-2">
    <div>
        <!-- https://github.com/LeoDog896/svelte-tilt -->
        <img  use:tilt={{ reverse: true}} src="/bsi-logo.png" alt="" class="w-4/5 mx-auto mt-14 max-w-[60%]">
        <h1 class=" text-center mx-auto my-7 text-textColor text-xl w-4/5 ">Hos os træner vi Wado Ryu-karate og vægter både fællesskab og personlig udvikling højt. Alle er velkomne, uanset niveau. Kom og oplev karate på Strandgårdsskolen!</h1>
    </div>
    
    <Collage />

    <MediaQuery query='(max-width: 639px)' let:matches> <!--- was 641 --->
        {#if matches}
        <div class="
                mt-12 sm:-mt-[65px] lg:mt-[10%] 2xl:mt-[20%] 
                scale-100 sm:scale-75 lg:scale-100 2xl:scale-125 
                mx-auto  ">
            <HexagonStack />
        </div>
        <Nyheder />
        {/if}
    </MediaQuery>

    <MediaQuery query='(min-width: 640px) and (max-width: 1023px)' let:matches> <!-- was 641 -->
        {#if matches}
        <Nyheder />
        <div class="
                mt-12 sm:-mt-[65px]
                scale-100 sm:scale-75  
                mx-auto ">
            <HexagonStack />
        </div>
        {/if}
    </MediaQuery>

    <MediaQuery query='(min-width: 1024px)' let:matches> <!-- was 641 -->
        {#if matches}
        <Nyheder />
        <div class="relative">
            <div class=" absolute
                    mt-[10%] 2xl:mt-[20%] 
                    scale-100 2xl:scale-125 
                    lgplus:ml-[8%] 2xl:ml-[15%] ">
                <HexagonStack />
            </div>
        </div>
        {/if}
    </MediaQuery>

</div>




