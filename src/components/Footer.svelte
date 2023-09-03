<script lang="ts">
    import FooterSection from "./FooterSection.svelte";
    import MediaQuery from 'svelte-media-queries'
    import tilt from 'svelte-tilt'

</script>

<div class="w-full  mt-7 bg-backgroundFooter text-black">
    
    <MediaQuery query='(max-width: 1023px)' let:matches>
        {#if matches}
        <div class="flex justify-center">
            <div class=" ml-[5%]">
                <div  class=" pt-11">
                    <FooterSection title="Kontakt information"> 
                        <h1>Budo Sportskarate Ishøj</h1>
                        <h1>Ishøj Søvej 200, 2635 Ishøj</h1>
                        <h1>tlf: +45 4236 3300</h1>
                        <h1>Email: info@budosportskarateishoj.dk</h1>
                    </FooterSection>
                </div>
                <div  class=" flex gap-7 pt-11">
                    <FooterSection title="Sider"> 
                        <h1>Aktiviteter</h1>
                        <h1>Om karate</h1>
                        <h1>Kontakt os</h1>
                        <h1>Nyheder</h1>
                        <h1>Bliv medlem</h1>
                        <h1>Galleri</h1>
                    </FooterSection>
                    <FooterSection title="Ekstra"> 
                        <h1>GDPR</h1>
                        <h1>Generalforsamling 2023</h1>
                        <h1>Vores stævner</h1>
                        <h1>Wado graduerings pensum</h1>
                    </FooterSection>
                </div>
            </div>
        </div>
        <div class="flex justify-center gap-6 mt-6">
            <img src="/facebookSVG.svg" alt="" class=" w-16">
            <img src="/instagramSVG.svg" alt="" class=" w-16">
            <img src="/youtubeSVG.svg" alt="" class=" w-16">
        </div>
    
        <img use:tilt={{ reverse: true}} src="/bsi-logo.png" alt="logo" class="w-[300px] mt-3 mx-auto">
        {/if}
    </MediaQuery>

    <MediaQuery query='(min-width: 1024px)' let:matches>
        {#if matches}
        <div class="flex justify-evenly align-baseline ">
            <div class="ml-12 ">
                <img use:tilt={{ reverse: true}} src="/bsi-logo.png" alt="logo" class="w-[240px] mt-3 mx-auto">

                <div class="flex justify-center gap-6 mt-2">
                    <img src="/facebookSVG.svg" alt="" class=" w-12">
                    <img src="/instagramSVG.svg" alt="" class=" w-12">
                    <img src="/youtubeSVG.svg" alt="" class=" w-12">
                </div>
            </div>
    
            <FooterSection title="Kontakt information"> 
                <h1>Budo Sportskarate Ishøj</h1>
                <h1>Ishøj Søvej 200, 2635 Ishøj</h1>
                <h1>tlf: +45 4236 3300</h1>
                <h1>Email: info@budosportskarateishoj.dk</h1>
            </FooterSection>
            <FooterSection title="Sider"> 
                <h1>Aktiviteter</h1>
                <h1>Om karate</h1>
                <h1>Kontakt os</h1>
                <h1>Nyheder</h1>
                <h1>Bliv medlem</h1>
                <h1>Galleri</h1>
            </FooterSection>
            <FooterSection title="Ekstra"> 
                <h1>GDPR</h1>
                <h1>Generalforsamling 2023</h1>
                <h1>Vores stævner</h1>
                <h1>Wado graduerings pensum</h1>
            </FooterSection>
        </div>
        {/if}
    </MediaQuery>
    <h1 class=" text-center mt-4 pb-4 text-xl">&#169; Budo Sportskarate Ishøj</h1>

</div>