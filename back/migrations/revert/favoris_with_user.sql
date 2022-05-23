-- Revert My-Journey:favoris_with_user from pg

BEGIN;

DROP VIEW favoris_with_user;

COMMIT;
