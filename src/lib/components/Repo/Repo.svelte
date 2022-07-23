<script lang="ts">
	import LANGUAGE_COLORS from '../../../languageColors.json';
	import { userStore } from '../../stores/user';
</script>

<!-- <pre>{$userStore.repos}</pre> -->
{#if $userStore.repos}
	<div
		class="w-11/12 lg:w-7/12 my-4 mx-auto mt-4 bg-[#50565b] rounded-t-md rounded-r-md p-4 lg:p-8"
	>
		{#each $userStore.repos as repo}
			<div class="w-full p-4 border-b border-gray-500">
				<h2 class="text-blue-400 hover:text-blue-500 cursor-pointer text-2xl transition-all">
					<a href={repo.html_url}>{repo.name}</a>
				</h2>
				<div class="flex justify-between">
					<h3 class="text-xl text-gray-300">{repo.description ?? ''}</h3>
					<h3 class="text-xl text-gray-300 flex items-center bg-gray-500 px-4 py-2 h-8 rounded-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="#daaa3f"
							viewBox="0 0 24 24"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
							/>
						</svg>
						{repo.stargazers_count}
					</h3>
				</div>
				<div class="text-gray-400 flex items-center">
					<div
						class={`w-4 h-4 rounded-full mr-2 bg-[${
							LANGUAGE_COLORS[repo.language]?.color || '#dedede'
						}]`}
					/>
					<span class="mr-2">{repo.language}</span>
					<svg
						aria-label="fork"
						role="img"
						height="16"
						viewBox="0 0 16 16"
						version="1.1"
						width="16"
						data-view-component="true"
						class="octicon octicon-repo-forked"
					>
						<path
							fill="#9ca3af"
							d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
						/>
					</svg>
					{repo.forks}
				</div>
			</div>
		{/each}
	</div>
{/if}
