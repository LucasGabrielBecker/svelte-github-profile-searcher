import { writable, type Writable } from 'svelte/store';
import type { User } from '../types';

export const userStore: Writable<Partial<User>> = writable({});
