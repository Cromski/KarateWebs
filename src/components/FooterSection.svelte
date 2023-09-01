<script lang="ts">
    export let title: string;
</script>

<div>
    <h1 class=" text-4xl ">{title}</h1>
    
    <div class=" leading-8 text-xl">
        <slot/>
    </div>
</div>
