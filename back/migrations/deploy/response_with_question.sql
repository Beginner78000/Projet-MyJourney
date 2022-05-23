-- Deploy My-Journey:response_with_question to pg
BEGIN;

CREATE VIEW response_with_question AS
SELECT
    response.*,
    question.question AS question
FROM
    response
    JOIN question ON question.id = response.question_id;

COMMIT;