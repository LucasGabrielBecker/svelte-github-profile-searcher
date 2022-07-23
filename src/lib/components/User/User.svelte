<script lang="ts">
	import { userStore as user } from '$lib/stores/user';
	import UserNotFound from '../UserNotFoundToast/UserNotFound.svelte';
	let isToastVisible: boolean = false;

	const showToast = () => {
		isToastVisible = true;
		setTimeout(() => (isToastVisible = false), 2500);
	};
</script>

{#if $user.login}
	<div class="flex items-center flex-col mb-6 lg:sticky lg:top-0 bg-[#23292e] pb-6">
		<div class="flex items-end">
			<img
				class="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-full"
				src={$user?.avatar_url ? $user?.avatar_url : 'https://i.pravatar.cc/300'}
				alt="avatar"
			/>
			{#if $user.html_url}
				<a
					href={$user?.html_url ? $user?.html_url : 'https://github.com'}
					class="transform -translate-y-8 translate-x-4 bg-[#44BBA4] hover:bg-[#379683] transition-all text-sm px-2 lg:text-lg text-white w-max py-2 rounded-md text-center"
				>
					Visitar perfil
				</a>
			{/if}
		</div>
		<div class="mt-6  flex items-center flex-col">
			<h2 class="text-4xl text-gray-400">
				{$user?.name ? $user?.name : null}
			</h2>
			<h3 class="text-2xl text-gray-600">
				{$user?.login ? $user?.login : null}
			</h3>
			<h4 class="text-2xl text-gray-400 w-10/12">
				{$user?.bio ? $user?.bio : null}
			</h4>
		</div>
		{#if isToastVisible}
			<UserNotFound handleClose={() => (isToastVisible = false)} />
		{/if}
	</div>
{:else if $user.error}
	<div class="flex justify-center items-center mt-12">
		<span class="text-4xl text-red-700 text-center">{$user.error}</span>
	</div>
{/if}
