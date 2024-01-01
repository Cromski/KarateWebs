<script lang="ts">
    //get list of images from blob
    import FaEllipsisH from 'svelte-icons/fa/FaEllipsisH.svelte'
    
    // give me a list of 3 random numbers from 1-8
    const randomNumbers = [1,2,3,4,5,6,7,8].sort(() => Math.random() - Math.random()).slice(0, 3);


</script>

<a href="/galleri" class=" w-[90%] aspect-square mx-auto flex relative select-none cursor-pointer
sm:w-[70%] sm:my-auto ">
        <img class=" object-cover w-1/3" src={`/blob/nature${randomNumbers[0]}s.jpg`} alt="">
        <img class=" object-cover w-1/3" src={`/blob/nature${randomNumbers[1]}s.jpg`} alt="">
        <img class=" object-cover w-1/3 brightness-50 " src={`/blob/nature${randomNumbers[2]}s.jpg`} alt="">
        <h1 class=" absolute text-textColor right-[5%] text-[8vw] bottom-[30%]
                    sm:text-[3vw]">Galleri</h1>
        <div class=" absolute text-textColor w-[10%] right-[12%] bottom-[20%] ">
            <FaEllipsisH />
    </div>
</a>