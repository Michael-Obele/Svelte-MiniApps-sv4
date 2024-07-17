-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SavePassword" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "userExtraId" TEXT,
    "password" TEXT NOT NULL,
    "details" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL DEFAULT '',
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SavePassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavePassword" ("createdAt", "details", "id", "password", "title", "updatedAt", "userExtraId", "userId") SELECT "createdAt", coalesce("details", '') AS "details", "id", "password", coalesce("title", '') AS "title", "updatedAt", "userExtraId", "userId" FROM "SavePassword";
DROP TABLE "SavePassword";
ALTER TABLE "new_SavePassword" RENAME TO "SavePassword";
CREATE UNIQUE INDEX "SavePassword_password_key" ON "SavePassword"("password");
CREATE UNIQUE INDEX "SavePassword_userId_password_key" ON "SavePassword"("userId", "password");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
