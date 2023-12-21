<script lang="ts">

    let today = new Date()
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000))
    const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    let title: string = "sd"
    let date1: string
    let date2: string

    $: today, date1 = formatDate(today)
    $: tomorrow, date2 = formatDate(tomorrow)

</script>

<div >
    <input type="text" bind:value={title} />
    <input type="date" bind:value={date1} />
    <input type="date" bind:value={date2} />
    <button class=" bg-textColor" on:click={() => console.log(title, date1, date2)}>Add</button>
</div>