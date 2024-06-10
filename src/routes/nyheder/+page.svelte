<script lang="ts">
    import NewsStore from "../../stores/news/NewsStore";
    import AddNews from "../../components/News/AddNews.svelte";
    import LatestNews from "../../components/News/LatestNews.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        NewsStore.init();
        console.log("news, inited")
    })

</script>



<h1>nyheder inc</h1>

<LatestNews />

<AddNews />
