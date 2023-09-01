<script lang="ts">
    import tilt from 'svelte-tilt'
    import Collage from '../components/Collage.svelte';
    import HexagonStack from '../components/HexagonStack.svelte';
    import Nyheder from '../components/Nyheder.svelte';
</script>

<div class=" grid grid-cols-1 sm:grid-cols-2 gap-11">
    <div>
        <!-- https://github.com/LeoDog896/svelte-tilt -->
        <img  use:tilt={{ reverse: true}} src="/bsi-logo.png" alt="" class="w-4/5 mx-auto mt-14 max-w-[60%]">
        <h1 class=" text-center mx-auto my-7 text-textColor text-xl w-4/5 ">Cras sollicidtuion sodalfes quam, et tempus est bibendum eget. pPrawesent et velit ague. Quisque vulputate lettus sit amet scaliseique piacerat.</h1>
    </div>
    
    <Collage />
    
    <Nyheder />
    
    <div class=" mx-auto sm:mx-0">
        <HexagonStack />
    </div>
    
</div>




