-- Revert My-Journey:my-journey-v1 from pg

BEGIN;

DROP TABLE "destination", "response", "question", "register", "journey", "favoris", "review", "user";

COMMIT;
