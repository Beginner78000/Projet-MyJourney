-- Revert My-Journey:forum from pg

BEGIN;

DROP TABLE "session", "message", "likes", "rubric";

COMMIT;
