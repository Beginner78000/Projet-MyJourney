const client = require('../config/db');

/**
 * @typedef {object} Question
 * @property {number} id - unique PK identifier
 * @property {string} question - Question from the quiz to help the user find his travel destination
 */

/**
 * @typedef {Object} InputQuestion
 * @property {string} question - Question of the quiz to know the desires of the user
 */

const dataMapper = {

    /**
     * Retrieves everything without filter or order
     * @returns {Question[]} - All questions in the database
     */
    async findAll() {
        const result = await client.query('SELECT * FROM question');
        return result.rows;
    },

    /**
     * Retrieve by id
     * @param {number} questionId - id of the desired question
     * @returns {(Question|undefined)} -
     * The desired question or undefined if no question with this id
     */
    async findByPk(questionId) {
        const prepared = {
            text: 'SELECT * FROM question WHERE id = $1',
            values: [questionId],
        };
        const result = await client.query(prepared);

        if (result.rowCount === 0) {
            return undefined;
        }

        return result.rows[0];
       
    },

    /**
     * Retrieve several questions by their id in a single request
     * @param {array<int>} questionIds The list of ids for the questions to retrieve
     */
    async findByIds(questionIds) {
        const result = await client.query('SELECT * FROM question WHERE id = ANY($1)', [questionIds]);
        return result.rows;
    },

    /**
     * Add to database
     * @param {InputQuestion} question - The data to insert
     * @returns {Question} - the insert question 
     */
    async insert(question) {
        const savedQuestion = await client.query(
            `
                INSERT INTO question
                (question) VALUES
                ($1) RETURNING *
            `,
            [question.question],
        );

        return savedQuestion.rows[0];
    },

    /**
     * Edit in database
     * @param {number} id - id to edit
     * @param {InputQuestion} question - the data to edit
     * @returns {Question} - The modified question
     */
    async update(id, question) {
        const fields = Object.keys(questions).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(question);

        const savedQuestion = await client.query(
            `
                UPDATE question SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id],
        );

        return savedQuestion.rows[0];
    },

    /**
     * Deletes from database
     * @param {number} id - id to delete
     * @returns {boolean} - The result of the deletion
     */
    async delete(id) {
        const result = await client.query('DELETE FROM question WHERE id = $1', [id]);
        return !!result.rowCount;
    }
};

module.exports = dataMapper;
