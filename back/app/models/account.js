const client = require('../config/db');

const dataMapper = {
    /**
     * Retrieves everything without filter or order
     * @returns {Account[]} - All journey of a connected user in the database
     */
    async findAllVoyages(userId) {
        const result = await client.query(
            'SELECT * FROM destination JOIN register ON destination_id = destination.id JOIN journey ON register.journey_id = journey.id WHERE user_id = $1;',
            [userId],
        );
        return result.rows;
    },

    /**
     * Retrieve by id
     * @param {number} journeyId - id of the journey
     * @returns {(Account|undefined)} -
     * The desired journey or undefined if no journey with this id
     */
    async findVoyagesByPk(journeyId, userId) {
        const prepared = {
            text: 'SELECT * FROM journey WHERE id = $1 AND user_id = $2;',
            values: [journeyId, userId],
        };
        const result = await client.query(prepared);

        if (result.rowCount === 0) {
            return undefined;
        }

        return result.rows[0];
    },

    /**
     * Create new journey entry
     * @param {Array} destinationsId - id of the journey
     * @returns {String} - The destinations add to journey
     */
    async insertVoyages(destinationsId, userId) {
        const preparedJourney = {
            text: 'INSERT INTO journey (user_id, destination_result) VALUES ($1, $2) RETURNING *',
            values: [userId, destinationsId],
        };
        const resultJourney = await client.query(preparedJourney);

        const journeyId = resultJourney.rows[0].id;

        destinationsId.forEach((element) => {
            client.query('INSERT INTO register VALUES ($1, $2)', [element, journeyId]);
        });

        return resultJourney.rows[0];
    },

    async deleteVoyagebyPK(journeyId) {
        const preparedRegister = {
            text: 'DELETE FROM register WHERE journey_id = $1',
            values: [journeyId],
        };
        const deleteRegister = await client.query(preparedRegister);

        const preparedJourney = {
            text: 'DELETE FROM journey WHERE id = $1',
            values: [journeyId],
        };
        const deleteJourney = await client.query(preparedJourney);

        return [deleteJourney, deleteRegister];
    },

    /**
     * Retrieves everything without filter or order
     * @returns {Account[]} - All favoris of a connected user in the database
     */
    async findAllFavoris(userId) {
        const result = await client.query(
            'SELECT * FROM favoris_with_user WHERE user_id = $1;',
            [userId],
        );
        return result.rows;
    },

    /**
     * Add to database
     * @param {InputFavoris} favoris - The data to insert
     * @returns {Favoris} - the added a favoris
     */
    async insertFavoris(favoris, userId) {
        const savedFavoris = await client.query(
            `
                INSERT INTO favoris
                (type, href, user_id)
                VALUES
                ($1, $2, $3) RETURNING *
            `,
            [
                favoris.type,
                favoris.href,
                userId,
            ],
        );

        return savedFavoris.rows[0];
    },

    /**
     * Récupère par son id
     * @param {number} favorisId - L'id du favoris souhaité
     * @param {number} userId - L'id du user souhaité
     * @returns {(Favoris|undefined)} - Le favoris souhaité ou undefined si aucun favoris à cet id
     */
    async findFavorisByPk(favorisId, userId) {
        const result = await client.query('SELECT * FROM favoris_with_user WHERE id = $1 AND user_id = $2', [
            favorisId,
            userId,
        ]);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows[0];
    },

    async deleteFavorisbyPK(favorisId) {
        const preparedFavoris = {
            text: 'DELETE FROM favoris WHERE id = $1',
            values: [favorisId],
        };
        const deleteFavoris = await client.query(preparedFavoris);

        return deleteFavoris;
    },

    /**
     * Retrieves everything without filter or order
     * @returns {Account[]} - All reviews of a connected user in the database
     */
    async findAllReviews(userId) {
        const result = await client.query(
            'SELECT * FROM reviews WHERE user_id = $1;',
            [userId],
        );
        return result.rows;
    },

    /**
     * Add to database
     * @param {InputReview} review - The data to insert
     * @returns {Review} - the added a review
     */
    async insertReviews(review) {
        const savedReview = await client.query(
            `
                INSERT INTO review
                (href, type, title, username, description, rating, user_id)
                VALUES
                ($1, $2, $3, $4, $5, $6, $7) RETURNING *
            `,
            [
                review.href,
                review.type,
                review.title,
                review.username,
                review.description,
                review.rating,
                review.user_id,
            ],
        );

        return savedReview.rows[0];
    },

    /**
     * Récupère par son id
     * @param {number} reviewId - L'id de la review souhaité
     * @param {number} userId - L'id du user souhaité
     * @returns {(Review|undefined)} - La review souhaité ou undefined si aucune review à cet id
     */
    async findReviewsByPk(reviewId, userId) {
        const result = await client.query('SELECT * FROM review WHERE id = $1 AND user_id = $2', [
            reviewId,
            userId,
        ]);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows[0];
    },

    async findProfilByUser(userId) {
        const result = await client.query(
            `
                SELECT
                    "user".id, "user".username, journey.destination_result,
                    review.href, review.type, review.title, review.description,
                    review.rating, favoris.type, favoris.href
                FROM "user"
                LEFT JOIN journey ON "user".id = journey.user_id
                LEFT JOIN review ON "user".id = review.user_id
                LEFT JOIN favoris ON "user".id = favoris.user_id
                WHERE "user".id = $1;
            `,
            [userId],
        );

        return result.rows;
    },
};

module.exports = dataMapper;
