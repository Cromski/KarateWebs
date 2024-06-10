<script lang="ts">
    import NewsStore from "../../stores/news/NewsStore";
    import OneNews from "./OneNews.svelte";

</script>


{#each [...$NewsStore].reverse() as news, index}
    {#if news}
        <div class="w-3/5 mx-auto">
            <OneNews news={news} />
        </div>
    {/if}
{/each}

