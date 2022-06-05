-- Revert My-Journey:domain-password from pg
BEGIN;

ALTER TABLE
    "user"
ALTER COLUMN
    "password" TYPE TEXT;

DROP DOMAIN "CHK_Password";

COMMIT;