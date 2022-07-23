<script lang="ts">
	import '../app.css';
	import Repo from '../lib/components/Repo/Repo.svelte';
	import SearchBar from '../lib/components/SearchBar/SearchBar.svelte';
	import User from '../lib/components/User/User.svelte';
	import { loading } from '$lib/stores';
	import Spinner from '../lib/components/Spinner/Spinner.svelte';
</script>

<SearchBar />

{#if $loading}
	<Spinner />
{:else}
	<User />
	<Repo />
{/if}

<style>
	:global(body) {
		background: #23292e;
		--primary: #44bba4;
	}
</style>
