<script lang="ts">
    import MdMenu from 'svelte-icons/md/MdMenu.svelte'
</script>

<div class="w-full h-24 bg-backgroundLighter flex justify-between">
    <img src="/bsi-logo.png" alt="" class=" ml-10 h-4/5 inline-block my-auto">
    <button class="inline-block scale-50 lg:hidden ">
        <MdMenu />
    </button>
    <div class="hidden lg:flex justify-between gap-28 text-2xl mr-20">
        <button>Aktiviteter</button>
        <button>Om karate</button>
        <button>Kontakt os</button>
        <button>Nyheder</button>
        <button>Bliv medlem</button>
        <button>Galleri</button>
    </div>
</div>