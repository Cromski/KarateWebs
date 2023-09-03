<script lang="ts">
    import MdMenu from 'svelte-icons/md/MdMenu.svelte'
</script>

<div class="w-full h-24 bg-backgroundLighter flex justify-between relative">
    <a class=" flex" href="/">
        <img src="/bsi-logo.png" alt="" class=" ml-10 h-4/5 inline-block my-auto">
    </a>
    <button  class="inline-block scale-50 md:hidden ">
        <MdMenu />
    </button>
    <div class="hidden text-textColor items-center md:flex gap-6 lg:gap-12 text-lg lg:text-xl mr-4 lg:mr-8 2xl:text-2xl 2xl:gap-20 2xl:mr-16">
        <a href="/aktiviteter">Aktiviteter</a>
        <a href="/om-karate">Om karate</a>
        <a href="/kontakt">Kontakt os</a>
        <a href="/nyheder">Nyheder</a>
        <a href="/bliv-medlem">Bliv medlem</a>
        <a href="/galleri">Galleri</a>
    </div>
</div>