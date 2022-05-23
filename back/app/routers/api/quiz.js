const { Router } = require('express');

const { quizController: controller } = require('../../controllers/api');
const validate = require('../../validation/validator');
const quizSchema = require('../../validation/schemas/quizSchema');
const controllerHandler = require('../../helpers/controllerHandler');

const { cache } = require('../../helpers/cache');

const router = Router();

router
    .route('/')
    /**
     * GET /api/quiz
     * @summary Get quiz
     * @tags Quiz
     * @return {[Quiz]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.displayQuiz));

router
    .route('/results')
    /**
     * POST /api/quiz/results
     * @summary Get quiz results
     * @tags Quiz
     * @return {[Quiz]} 200 - success response - application/json
     */
    .post(validate('body', quizSchema), controllerHandler(controller.getResults));

module.exports = router;

