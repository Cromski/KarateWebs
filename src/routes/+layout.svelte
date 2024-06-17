<script lang="ts">
    import '../app.css'
    import NavBar from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte';
    export let data;
</script>

<NavBar user={data.user}/>
<slot />
<Footer />
