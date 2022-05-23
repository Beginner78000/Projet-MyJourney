-- Verify My-Journey:response_with_question on pg

BEGIN;

SELECT * FROM response_with_question WHERE false;

ROLLBACK;
