<script lang="ts">
    import moment from "moment";

    export let news;

    const formatISOstring = (ISOstring:string) => moment(ISOstring).format("DD-MM/YYYY, HH:mm")

</script>

<div class=" text-darkTextColor bg-textColor w-3/5 my-5 mx-auto rounded-md relative">
    <h1 class="absolute right-3">{formatISOstring(news.date)}</h1>
    <h1 class=" text-2xl text-center">{news.title}</h1>
    <div class="w-4/5 mx-auto">
        <h1 class=" ">{news.body}</h1>
    </div>
</div>