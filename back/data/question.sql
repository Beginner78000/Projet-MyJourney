BEGIN;

INSERT INTO "question" ("id", "question")
VALUES (
    1,
    'Où souhaitez-vous partir ?'
),
(
    2,
    'A quelle période de l''année ?'
),
(
    3,
    'Quelle température aimeriez-vous ?'
),
(
    4,
    'A quelle distance de chez vous ?'
),
(
    5,
    'Quel est votre budget ?'
);

COMMIT;