<script lang="ts">
	import { fetchUser } from '../../../utils/fetchUser';

	import { userStore, loading } from '../../stores';

	let username = '';

	const handleSearchSubmit = async () => {
		try {
			loading.set(true);
			const { user, error } = await fetchUser(username);

			if (error) userStore.set({ error });

			if (user) {
				userStore.set(user);
			}
			username = '';
		} catch (error) {
			console.error(error);
			userStore.set({ error: error.message });
		} finally {
			loading.set(false);
		}
	};

	const handleKeyUp = (event: KeyboardEvent) => {
		const key = event.key;
		if (key === 'Enter') handleSearchSubmit();
	};
</script>

<header class="h-20 flex items-center px-24">
	<svg
		height="60"
		aria-hidden="true"
		viewBox="0 0 16 16"
		version="1.1"
		width="60"
		class="mx-2 lg:ml-6 lg:mr-8"
		data-view-component="true"
	>
		<path
			fill="#fff"
			d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
		/>
	</svg>

	<div class="flex w-11/12">
		<input
			class="shadow appearance-none border rounded w-full h-8 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
			name="username"
			type="text"
			bind:value={username}
			on:keyup={handleKeyUp}
			placeholder="Usuário"
			autoComplete="off"
		/>
		<button
			type="submit"
			on:click={handleSearchSubmit}
			style:background="var(--primary)"
			class="ml-6 hover:bg-[#379683] text-white text-sm font-bold h-8 px-4 rounded focus:outline-none focus:shadow-outline transition-all "
		>
			Pesquisar
		</button>
	</div>
</header>
