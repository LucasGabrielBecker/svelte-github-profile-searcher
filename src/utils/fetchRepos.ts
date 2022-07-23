export async function fetchRepos(username: string): Promise<any> {
	const response = await fetch(
		`https://api.github.com/users/${username.toLowerCase().trim()}/repos`
	);
	return await response.json();
}
