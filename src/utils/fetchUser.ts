import type { User } from '../lib/types';
import { fetchRepos } from './fetchRepos';

interface ReturnBasic {
	error?: string;
}
interface Succes extends ReturnBasic {
	user: User;
}

interface Error extends ReturnBasic {
	user: null;
	error: string;
}

type SuccesOrError = Succes | Error;

export async function fetchUser(username: string): Promise<SuccesOrError> {
	try {
		const response = await fetch(`https://api.github.com/users/${username.toLowerCase().trim()}`);
		const user = await response.json();

		if (user.login) {
			const repos = await fetchRepos(user.login);
			console.log(repos);
			return {
				user: { ...user, repos },
				error: ''
			};
		}

		return {
			user: null,
			error: 'Usuario nao encontrado'
		};
	} catch (error: unknown) {
		return {
			user: null,
			error: error.message
		};
	}
}
