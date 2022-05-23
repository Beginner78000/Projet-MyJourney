-- Verify My-Journey:forum on pg

BEGIN;

SELECT * FROM "rubric" WHERE false;

SELECT * FROM "message" WHERE false;

SELECT * FROM "likes" WHERE false;

SELECT * FROM "session" WHERE false;

ROLLBACK;
