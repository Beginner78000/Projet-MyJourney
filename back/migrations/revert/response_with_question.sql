-- Revert My-Journey:response_with_question from pg

BEGIN;

DROP VIEW response_with_question;

COMMIT;
