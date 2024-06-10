<script lang="ts">
    import moment from "moment";

    export let news;

    const formatISOstring = (ISOstring:string) => moment(ISOstring).format("DD-MM/YYYY, HH:mm")

</script>

<div class=" text-darkTextColor bg-textColor my-5 rounded-md relative">
    <h1 class=" text-sm absolute right-2">{formatISOstring(news.date)}</h1>
    <h1 class=" pt-4 text-2xl text-center">{news.title}</h1>
    <div class=" pb-4  mt-5 w-4/5 mx-auto">
        <h1 class=" whitespace-pre-line">{news.body}</h1>
    </div>
</div>