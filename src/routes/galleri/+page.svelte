<script lang="ts">
    export let data
    
</script>

<div class=" flex justify-center mt-8">
    <input type="file" multiple class=" file-input file-input-bordered w-full max-w-sm" />
</div>



{#if data.blobImages.length > 0}
{#each data.blobImages as bi}
<img src={`https://karatewebsstorage.blob.core.windows.net/bsiimages/${bi.name}`} alt="">

    {/each}

{:else} 
<h1>loading......</h1>
{/if}


<!-- {#if files}
    {#each Array.from(files) as file }
        <h1>{file.name}</h1>
    {/each}
{/if} -->