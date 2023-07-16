<script lang="ts">
    import tilt from 'svelte-tilt'
    import Collage from '../components/Collage.svelte';
    import HexagonStack from '../components/HexagonStack.svelte';

</script>

<!-- https://github.com/LeoDog896/svelte-tilt -->
<img  use:tilt={{ reverse: true}} src="/yellow.png" alt="" class="w-4/5 mx-auto mt-9">

<h1 class=" text-center mx-3 my-7 text-textColor">Cras sollicidtuion sodalfes quam, et tempus est bibendum eget. pPrawesent et velit ague. Quisque vulputate lettus sit amet scaliseique piacerat.</h1>

<Collage />

<HexagonStack />



