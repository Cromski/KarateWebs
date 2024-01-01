<script lang="ts">
    import MdMenu from 'svelte-icons/md/MdMenu.svelte'
    import NavBarOpen from '../stores/NavMenuOpenStore';
    import { fade, fly } from 'svelte/transition';

    let y:number

    const navBarItems = [
        {text: "Aktiviteter", route: "/aktiviteter"},
        {text: "Om karate", route: "/om-karate"},
        {text: "Kontakt os", route: "/kontakt"},
        {text: "Nyheder", route: "/nyheder"},
        {text: "Bliv medlem", route: "/bliv-medlem"},
        {text: "Galleri", route: "/galleri"},
    ]

</script>

<svelte:window bind:scrollY={y} />

{#if y <= 200}
<div class=" w-full h-24 bg-backgroundLighter flex justify-between ">
    <a on:click={() => NavBarOpen.set(false)} class=" flex" href="/">
        <img src="/bsi-logo.png" alt="" class=" ml-10 h-4/5 inline-block my-auto">
    </a>
    <!-- small screen -->
    <button class=" md:hidden inline-block scale-50 " on:click={() => NavBarOpen.set(!$NavBarOpen)}>
        <MdMenu />
    </button>
    {#if $NavBarOpen}
        <div in:fly={{ y:200, duration:200}} out:fly={{x:200, duration:200}} class="absolute top-[98px] md:hidden z-10 bg-backgroundLighter w-full grid grid-cols-1 ">
            {#each navBarItems as item}
                <a class=" text-right text-xl font-semibold pr-14 h-14 leading-[56px] hover:bg-backgroundColor" on:click={() => NavBarOpen.set(false)} href={item.route}>{item.text}</a>
            {/each}
        </div>
    {/if}
    
    <!--  big screen  -->
    <div class="hidden text-textColor items-center md:flex gap-6 lg:gap-12 text-lg lg:text-xl mr-4 lg:mr-8 2xl:text-2xl 2xl:gap-20 2xl:mr-16">
        {#each navBarItems as item}
            <a href={item.route}>{item.text}</a>
        {/each}
    </div>
</div>
{/if}
{#if y > 200}
<div in:fly={{ y:-200, duration:200}} class=" sticky top-0 z-10 w-full h-24 bg-backgroundLighter flex justify-between ">
    <a on:click={() => NavBarOpen.set(false)} class=" flex" href="/">
        <img src="/bsi-logo.png" alt="" class=" ml-10 h-4/5 inline-block my-auto">
    </a>
    <!-- small screen -->
    <button class=" md:hidden inline-block scale-50 " on:click={() => NavBarOpen.set(!$NavBarOpen)}>
        <MdMenu />
    </button>
    {#if $NavBarOpen}
        <div in:fly={{ y:200, duration:200}} out:fly={{x:200, duration:200}} class="absolute top-[98px] md:hidden z-10 bg-backgroundLighter w-full grid grid-cols-1 ">
            {#each navBarItems as item}
                <a class=" text-right text-xl font-semibold pr-14 h-14 leading-[56px] hover:bg-backgroundColor" on:click={() => NavBarOpen.set(false)} href={item.route}>{item.text}</a>
            {/each}
        </div>
    {/if}
    
    <!--  big screen  -->
    <div class="hidden text-textColor items-center md:flex gap-6 lg:gap-12 text-lg lg:text-xl mr-4 lg:mr-8 2xl:text-2xl 2xl:gap-20 2xl:mr-16">
        {#each navBarItems as item}
            <a href={item.route}>{item.text}</a>
        {/each}
    </div>
</div>
{/if}