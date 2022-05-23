const responseDataMapper = require('../../models/response');
const destinationDataMapper = require('../../models/destination');
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
    /**
     * Quiz controller to display quiz.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async displayQuiz(req, res) {
        // on créé un tableau vide de quiz
        let quiz = [];
        const id = req.params.id;

        // on va chercher les questions et responses
        const result = await responseDataMapper.findResponseByQuestionId(id);

        if (!result) {
            throw new ApiError('Quiz not found', { statusCode: 404 });
        }

        // on les insert dans le tableau
        quiz.push(result);

        return res.json(quiz);
    },

    /**
     * Quiz controller to display quiz result.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getResults(req, res) {
        // On recupere les donnees du questionnaire
        const answer = req.body;

        const landscape = answer[0];
        const seasonperiod = answer[1];
        const seasontemperature = answer[2];
        const distance = answer[3];
        const budget = answer[4];

        // On compare les réponses avec les destinations
        const result = await destinationDataMapper.findDestinationsByResponses(
            landscape,
            seasonperiod,
            seasontemperature,
            distance,
            budget,
        );
        // console.log(result);
        // On renvoi le tableau des destinations au front
        return res.json(result);
    },
};
