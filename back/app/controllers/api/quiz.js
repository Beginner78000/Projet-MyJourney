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
    async displayQuiz(_, res) {
        // I create an empty array of quiz
        let quiz = [];

        // I get the data from the method of the dataMapper
        const result = await responseDataMapper.findResponseByQuestionId();

        // I send an error if no quiz is find
        if (!result) {
            throw new ApiError('Quiz not found', { statusCode: 404 });
        }

        // I push the result of the dataMapper in the quiz array 
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
        // console.log(answer);

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
