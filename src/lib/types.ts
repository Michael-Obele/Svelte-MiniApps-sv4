// src/types.ts

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

interface Role {
	id: BigInt;
	name?: string;
}

export interface UserDB {
	id: string;
	username: string;
	passwordHash: string;
	userAuthToken: string;
	isAdmin: boolean;
	createdAt: Date;
	updatedAt: Date;
	roleId: BigInt;
	role?: Role;
	data?: string | null;
}
