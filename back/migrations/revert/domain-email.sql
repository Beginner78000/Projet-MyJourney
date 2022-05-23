-- Revert My-Journey:domain-email from pg

BEGIN;

ALTER TABLE "user"
    ALTER COLUMN "email" TYPE TEXT;
DROP DOMAIN "CHK_Email";

COMMIT;
