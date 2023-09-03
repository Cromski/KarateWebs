<script lang="ts">
    import FooterSection from "./FooterSection.svelte";
    import MediaQuery from 'svelte-media-queries'
    import tilt from 'svelte-tilt'

</script>

<div class="w-full  mt-7 bg-backgroundFooter text-black">
    
    <MediaQuery query='(max-width: 767px)' let:matches>
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
                        <a href="/aktiviteter">Aktiviteter</a>
                        <a href="/om-karate">Om karate</a>
                        <a href="/kontakt">Kontakt os</a>
                        <a href="/nyheder">Nyheder</a>
                        <a href="/bliv-medlem">Bliv medlem</a>
                        <a href="/galleri">Galleri</a>
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

    <MediaQuery query='(min-width: 768px) and (max-width: 1023px)' let:matches>
        {#if matches}

        <div class="flex justify-evenly">
            <div class=" my-auto">
                <img use:tilt={{ reverse: true}} src="/bsi-logo.png" alt="logo" class="w-[300px] mt-3 mx-auto">
                <div class="flex justify-center gap-6 mt-6">
                    <img src="/facebookSVG.svg" alt="" class=" w-16">
                    <img src="/instagramSVG.svg" alt="" class=" w-16">
                    <img src="/youtubeSVG.svg" alt="" class=" w-16">
                </div>
            </div>
    
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
                            <a href="/aktiviteter">Aktiviteter</a>
                            <a href="/om-karate">Om karate</a>
                            <a href="/kontakt">Kontakt os</a>
                            <a href="/nyheder">Nyheder</a>
                            <a href="/bliv-medlem">Bliv medlem</a>
                            <a href="/galleri">Galleri</a>
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
        </div>
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
                <a href="/aktiviteter">Aktiviteter</a>
                <a href="/om-karate">Om karate</a>
                <a href="/kontakt">Kontakt os</a>
                <a href="/nyheder">Nyheder</a>
                <a href="/bliv-medlem">Bliv medlem</a>
                <a href="/galleri">Galleri</a>
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