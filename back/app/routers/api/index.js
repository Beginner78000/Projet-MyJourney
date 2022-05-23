const express = require('express');

const destinationRouter = require('./destination');
const { destinationController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');
const quizRouter = require('./quiz');
const userRouter = require('./user');
const accountRouter = require('./account');
const adminRouter = require('./admin');
const forumRouter = require('./forum');

const { apiController } = require('../../controllers/api');

const { ApiError } = require('../../helpers/errorHandler');

const { cache } = require('../../helpers/cache');
const { verifyToken } = require('../../middlewares/verifyToken');

const router = express.Router();

router.use((_, res, next) => {
    res.type('json');
    next();
});

router.all('/', apiController.home);

router.use('/destinations', destinationRouter);
router.use('/quiz', quizRouter);
router.use('/users', userRouter);
router.use('/account', verifyToken, accountRouter);
router.use('/admin', verifyToken, adminRouter);
router.use('/forum', forumRouter);

router
    .route('/continents')
    /**
     * GET /api/continents
     * @summary Get countries by continent
     * @tags Continents
     * @return {[Continents]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Continent not found - application/json
     */
    .get(cache, controllerHandler(controller.getCountriesByContinent));

router.use(() => {
    throw new ApiError('API Route not found', { statusCode: 404 });
});

module.exports = router;
