<script lang="ts">
    import '../app.css'
    import NavBar from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<NavBar />
<slot />
<Footer />
