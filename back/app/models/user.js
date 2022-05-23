const client = require('../config/db');

/**
 * @typedef {object} User
 * @property {number} id - unique PK identifier
 * @property {string} username - Pseudo of the user
 * @property {string} firstname - firstname of the user
 * @property {string} lastname - Lastname of the user
 * @property {string} email - email of the user
 * @property {string} password - Password chosen by the user
 * @property {string} passwordConfirm - to confirm the password chosen by the user
 * @property {string} role - role of the user(simple or admin)
 * @property {string} avatar - profil picture
 */

/**
 * @typedef {Object} InputUser
 * @property {string} username - Pseudo of the user
 * @property {string} firstname - firstname of the user
 * @property {string} lastname - Lastname of the user
 * @property {string} email - email of the user
 * @property {string} password - Password chosen by the user
 * @property {string} passwordConfirm - to confirm the password chosen by the user
 * @property {string} role - role of the user(simple or admin)
 * @property {string} avatar - profile picture
 */

const dataMapper = {

    /**
     * Retrieve by email
     * @param {string} userEmail - email of the desired user
     * @returns {(User|undefined)} -
     * The desired user or undefined if no user with this email
     */
    async findByEmail(userEmail) {
        const prepared = {
            text: 'SELECT * FROM "user" WHERE email = $1',
            values: [userEmail],
        };
        const result = await client.query(prepared);

        return result.rows[0];
    },

    /**
     * Retrieve by email
     * @param {string} userEmail - email of the desired user
     * @returns {(User|undefined)} -
     * The desired user or undefined if no user with this email
     */
     async findByUsername(userName) {
        const prepared = {
            text: 'SELECT * FROM "user" WHERE username = $1',
            values: [userName],
        };
        const result = await client.query(prepared);

        return result.rows[0];
    },

    /**
     * Retrieve several users by their id in a single request
     * @param {array<int>} userIds The list of ids for the users to retrieve
     */
    async findByPk(userId) {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [userId]);
        return result.rows[0];
    },

    /**
     * Add to database
     * @param {InputUser} user - The data to insert
     * @returns {User} - the insert user
     */
    async insert(user) {

        const savedUser = await client.query(
            `
                INSERT INTO "user"
                (username, firstname, lastname, email, password,
                role, avatar)
                VALUES
                ($1, $2, $3, $4, $5, $6, $7) RETURNING *
            `,
            [
                user.username,
                user.firstname,
                user.lastname,
                user.email,
                user.password,
                user.role,
                user.avatar
            ],
        );

        return savedUser.rows[0];
    },

    /**
     * Edit in database
     * @param {number} id - id to edit
     * @param {InputUser} user - the data to edit
     * @returns {User} - The modified user
     */
    async update(id, user) {
        const fields = Object.keys(user).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(user);

        const savedUser = await client.query(
            `
                UPDATE "user" SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id],
        );

        return savedUser.rows[0];
    },

    /**
     * Deletes from database
     * @param {number} id - id to delete
     * @returns {boolean} - The result of the deletion
     */
    async delete(id) {
        const result = await client.query('DELETE FROM "user" WHERE id = $1', [id]);
        return !!result.rowCount;
    },
};

module.exports = dataMapper;
