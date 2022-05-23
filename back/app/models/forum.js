const client = require('../config/db');

const dataMapper = {

     /**
     * Retrieve by id
     * @param {number} rubricId - id of the desired rubric
     * @returns {(Rubric|undefined)} -
     * The desired rubric or undefined if no rubric with this id
     */
    async findByPK(rubricId) {

        const result = await client.query(
                `
                    SELECT
                        COUNT(messages.id_message) AS "nombre_messages",
                        discussions.sujet, 
                        discussions.id_discussion,
                        messages.nom_utilisateur AS "utilisateur_createur", 
                        messages.date_ecriture
                    FROM discussions, messages
                    WHERE discussions.id_discussion = messages.id_discussion
                    AND messages.id_discussion = $1 
                    ORDER BY messages.date_ecriture 
                    LIMIT 0,1;
                `,
                [rubricId],
        );

        if (result.rowCount === 0) {
            return undefined;
        }

        return result.rows[0];
    },

};

module.exports = dataMapper;