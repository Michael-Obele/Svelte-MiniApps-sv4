import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

function getDbInstance() {
	if (!db) {
		db = new PrismaClient();
	}
	return db;
}

export { getDbInstance };
