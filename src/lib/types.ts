// src/types.ts

export interface Role {
	id: bigint;
	name: string;
}

export interface User {
	name: string;
	email: string;
	image: string;
}

export interface Session {
	user: User;
	expires: string;
}

export interface UserData {
	username: string;
	isAdmin: boolean;
	createdAt: string;
	role: Role;
}

export interface UserSessionData {
	data: UserData;
	session: Session;
}

export interface UserContext {
	currentUser: UserSessionData | null;
	userUsername: string;
	sessionUserName: string;
}
