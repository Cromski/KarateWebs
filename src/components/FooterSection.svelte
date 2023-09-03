<script lang="ts">
    export let title: string;
</script>

<div class=" mt-0 lg:mt-16">
    <h1 class=" text-4xl ">{title}</h1>
    
    <div class=" leading-8 text-xl">
        <slot/>
    </div>
</div>
