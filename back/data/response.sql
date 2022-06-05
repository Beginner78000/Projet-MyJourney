BEGIN;

INSERT INTO "response" ("id", "response", "question_id")
VALUES (
    1,
    '["Montagne", "Mer", "Ville", "Campagne"]',
    1
),
(
    2,
    '["sept-oct-nov", "déc-janv-fev", "mars-avril-mai", "juin-juil-août"]',
    2
),
(
    3,
    '["froid", "tempéré", "chaud"]',
    3
),
(
    4,
    '["France", "Europe", "Autres", "Peu importe"]',
    4
),
(
    5,
    '["petit", "moyen", "grand"]',
    5
);

COMMIT;

