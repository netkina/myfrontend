<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';
	import logo from '$lib/assets/logo.png';
	 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
 
	let { children } = $props();
</script>


<div class="app">


	{@render children()}


	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #EFF6FF;
	}


</style>
