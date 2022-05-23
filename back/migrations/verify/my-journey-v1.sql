-- Verify My-Journey:my-journey-v1 on pg

BEGIN;

SELECT * FROM "question" WHERE false;

SELECT * FROM "response" WHERE false;

SELECT * FROM "destination" WHERE false;

SELECT * FROM "user" WHERE false;

SELECT * FROM "journey" WHERE false;

SELECT * FROM "register" WHERE false;

SELECT * FROM "favoris" WHERE false;

SELECT * FROM "review" WHERE false;


ROLLBACK;
