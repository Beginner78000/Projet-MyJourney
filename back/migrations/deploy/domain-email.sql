-- Deploy My-Journey:domain-email to pg

BEGIN;

CREATE DOMAIN "CHK_Email" AS TEXT CHECK (VALUE ~ '^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$');

ALTER TABLE "user"
    ALTER COLUMN "email" TYPE "CHK_Email";

COMMIT;
