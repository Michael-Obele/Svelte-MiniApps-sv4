// src/types.ts

export interface Role {
	id: bigint;
	name: string;
}

export interface UserData {
	username: string;
	isAdmin: boolean;
	createdAt: string;
	role: Role;
}

export interface UserContext {
	data: UserData;
	session: null | any;
}
