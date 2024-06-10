<script lang="ts">
    import NewsStore from "../stores/news/NewsStore";
    import OneNews from "./News/OneNews.svelte";



</script>

<div class=" w-[90%] aspect-square mx-auto h-[500px]  mt-8"> <!-- bg-neutral-400 -->
    {#if $NewsStore.length > 0}
        <div class=" h-full overflow-scroll">
            <OneNews news={[...$NewsStore].reverse()[0]} />
        </div>
    {/if}
</div>