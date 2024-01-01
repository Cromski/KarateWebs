<script lang="ts">
    let files;

    $: console.log(files)

</script>

<div class=" flex justify-center mt-8">
    <input type="file" bind:files multiple class=" file-input file-input-bordered w-full max-w-sm" />
</div>

{#if files}
    {#each Array.from(files) as file }
        <h1>{file.name}</h1>
    {/each}
{/if}