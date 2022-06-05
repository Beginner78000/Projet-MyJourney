-- Deploy My-Journey:domain-password to pg

BEGIN;

CREATE DOMAIN "CHK_Password" AS TEXT CHECK (VALUE ~ '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');

ALTER TABLE "user"
    ALTER COLUMN "password" TYPE "CHK_Password";

COMMIT;
