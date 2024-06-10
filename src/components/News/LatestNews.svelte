<script lang="ts">
    import moment from "moment";
    import NewsStore from "../../stores/news/NewsStore";
    import OneNews from "./OneNews.svelte";
    


</script>


{#each [...$NewsStore].reverse() as news, index}
    {#if news}
        <OneNews news={news} />
    {/if}
{/each}

