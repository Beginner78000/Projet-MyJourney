require('dotenv').config();

const debug = require('debug')('import:log');

const client = require('../app/config/db');

// On récupère les données de base
const destinations = require('./');
const questions = require('./movement.json');
const responses = require('./wod.json');


(async () => {
    debug('Clean table');

    
    await client.query('TRUNCATE TABLE destination, question, response RESTART IDENTITY');

    // On prépare un tableau qui permettra de référencer
    // l'ensemble de requêtes d'insertion des catégories
    const destinationsQueries = [];

    destinations.forEach((destination) => {
        debug('Processing destination:', destination.city_name);
        const query = client.query(
            `
                INSERT INTO "destination"
                ("city_name",)
                VALUES
                ($1)
                RETURNING *;
            `,
            [category.label],
        );
        debug('Contenu de query', query);
        categoryQueries.push(query);
    });

    const results = await Promise.all(categoryQueries);

    debug('Contenu de results', results);

    // On stocke les catégories dans un tableau de référence
    const categoryRows = results.map((result) => result.rows[0]);

    debug('Contenu de categoryRows', categoryRows);

    // Pour chaque movement on genère une requête,
    // dont on va stocker la promesse d'exécution dans un tableau
    const movementQueries = [];
    movements.forEach((movement) => {
        debug('Processing movement:', movement.name);

        const movementCategory = categoryRows.find((category) => category.label === movement.type);

        // Seconde syntaxe pour les requêtes : la requête 'objet'
        const insertMovementQuery = {

            text: `
                INSERT INTO "movement"
                ("name", "type", "description", "visual_name", "movement_url", "category_id")
                VALUES
                ($1, $2, $3, $4, $5, $6)
            `,
            values: [
                movement.name,
                movement.type,
                movement.description,
                movement.visual_name,
                movement.movement_url,
                // On utilise notre objet de référence
                // afin d'inséré le bon id de catégorie rattaché à l'article
                movementCategory.id,
            ],
        };

        const query = client.query(insertMovementQuery);
        movementQueries.push(query);
    });

    // Un fois toutes les executions de requête créer
    // on les resolve toutes en même temps, et il ne faut qu'aucune ne soit en échec
    await Promise.all(movementQueries);

    const wodQueries = [];
    wods.forEach((wod) => {
        debug('Processing wod:', wod.title);

        const wodCategory = categoryRows.find((category) => category.label === wod.type);

        const insertWodQuery = {

            text: `
                INSERT INTO "training"
                ("type", "title", "mobility", "warm_up", "skills", "workout", "category_id")
                VALUES
                ($1, $2, $3, $4, $5, $6, $7)
            `,
            values: [
                wod.type,
                wod.title,
                wod.mobility,
                wod.warm_up,
                wod.skills,
                wod.workout,
                wodCategory.id,
            ],
        };

        const query = client.query(insertWodQuery);
        wodQueries.push(query);
    });

    await Promise.all(wodQueries);

    const boxQueries = [];
    boxes.forEach((box) => {
        debug('Processing box:', box.name);

        const boxCategory = categoryRows.find((category) => category.label === box.type);

        const insertBoxQuery = {

            text: `
                INSERT INTO "box"
                ("name", "type", "email", "phone_number", "website", "zip_code", "city", "category_id")
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8)
            `,
            values: [
                box.name,
                box.type,
                box.email,
                box.phone_number,
                box.website,
                box.zip_code,
                box.city,
                boxCategory.id,
            ],
        };

        const query = client.query(insertBoxQuery);
        boxQueries.push(query);
    });

    await Promise.all(boxQueries);

    debug('Done');
})();
