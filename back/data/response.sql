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
    '["froid (- 10°C)", "tempéré (10°C - 20°C)", "chaud (+ 20°)"]',
    3
),
(
    4,
    '["France", "Europe", "Autres", "Peu importe"]',
    4
),
(
    5,
    '["petit (- 1000€/semaine)", "moyen(- 2000€/semaine)", "grand(+ 2000€/semaine)"]',
    5
);

COMMIT;

