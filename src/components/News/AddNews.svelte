<script lang="ts">

    import { createNews } from "../../data/news";
    import NewsStore from "../../stores/news/NewsStore";
    import moment from 'moment-timezone'
    import toast, { Toaster } from 'svelte-french-toast';

    let blogTitle = ""
    let blogBody = ""

    interface news {
        club: string,
        date: string,
        title: string,
        body: string
    }

    let item: news;
    
    $: blogTitle, blogBody, item = {
        club: "BSI",
        date: moment().toISOString(),
        title: blogTitle,
        body: blogBody
    }

    const createNewsAux = async () => {
        if (!item.title) {
            toast.error("ERROR - No news title.")
            return
        } else if (!item.body) {
            toast.error("ERROR - No text in body")
            return
        }
        
        await createNews(item)
        console.log(item.title+item.body)
        blogTitle = ""
        blogBody = ""
        NewsStore.init()
        toast.success("SUCCESS - News was added.");
    }

    

</script>

<Toaster />

<div class="">
    <input bind:value={blogTitle} type="text">
    <textarea bind:value={blogBody}></textarea>
    <button class="py-2 px-4 bg-backgroundLighter text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" on:click={() => createNewsAux()}>Add</button>
</div>