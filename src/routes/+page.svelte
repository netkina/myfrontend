<script lang="ts">
	import { resolve } from "$app/paths";

		import './layout.css';
	import logo from '$lib/assets/logo.png';
	 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";

	resolve('/auth')
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
<Sidebar.Provider>
  <AppSidebar />

</Sidebar.Provider>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	
</style>
