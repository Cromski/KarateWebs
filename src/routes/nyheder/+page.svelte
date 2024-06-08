<script lang="ts">
    import NewsStore from "../../stores/news/NewsStore";
    import AddNews from "../../components/News/AddNews.svelte";
    import LatestNews from "../../components/News/LatestNews.svelte";

    NewsStore.init()

    let latestNews = $NewsStore[0]

    $: console.log(latestNews)

</script>



<h1>nyheder inc</h1>

<LatestNews latestNews={latestNews} />

<AddNews />
