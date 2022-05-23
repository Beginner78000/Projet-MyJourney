const client = require('../config/db');
const { findByPk } = require('./question');


/**
 * @typedef {object} Response
 * @property {number} id - unique PK identifier
 * @property {JSON} response - possible response for the user
 * @property {number} questionId - id of the question that is attached to the answer
 */

/**
 * @typedef {Object} InputResponse
 * @property {JSON} response - possible response
 * @property {number} questionId - id of the question that is attached to the answer
 */

const dataMapper = {

    /**
     * Retrieves everything without filter or order
     * @returns {Response[]} - All responses in the database
     */
    async findAll() {
        const result = await client.query('SELECT * FROM response');
        return result.rows;
    },

    /**
     * Retrieve by id
     * @param {number} responseId - id of the desired response
     * @returns {(Response|undefined)} -
     * The desired response or undefined if no response with this id
     */
    async findByPk(responseId) {
        const prepared = {
            text: 'SELECT * FROM response WHERE id = $1',
            values: [responseId],
        };
        const result = await client.query(prepared);

        if (result.rowCount === 0) {
            return undefined;
        }

        return result.rows[0];
        // return dataMapper.responseLoader.load(responseId);
    },

    /**
     * Retrieve several responses by their id in a single request
     * @param {array<int>} responseIds The list of ids for the responses to retrieve
     */
    async findByIds(responseIds) {
        const result = await client.query('SELECT * FROM response WHERE id = ANY($1)', [responseIds]);
        return result.rows;
    },

    /**
     * Add to database
     * @param {InputResponse} response - The data to insert
     * @returns {Response} - the insert response 
     */
    async insert(response) {
        const savedResponse = await client.query(
            `
                INSERT INTO response
                (response, question_id) VALUES
                ($1, $2) RETURNING *
            `,
            [response.response, response.questionId],
        );

        return savedResponse.rows[0];
    },

    /**
     * Edit in database
     * @param {number} id - id to edit
     * @param {InputResponse} response - the data to edit
     * @returns {Response} - The modified response
     */
    async update(id, response) {
        const fields = Object.keys(response).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(response);

        const savedRespons = await client.query(
            `
                UPDATE response SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id],
        );

        return savedRespons.rows[0];
    },

    /**
     * Deletes from database
     * @param {number} id - id to delete
     * @returns {boolean} - The result of the deletion
     */
    async delete(id) {
        const result = await client.query('DELETE FROM response WHERE id = $1', [id]);
        return !!result.rowCount;
    },

    /**
    * Retrieve response by question id
    * @param {number} questionId - the question id
    * @returns {Response[]} - The list of responses marked with this question id in the DB
    */
    async findResponseByQuestionId() {
        const result = await client.query('SELECT * FROM response_with_question');
        return result.rows;
    },
};

module.exports = dataMapper;
