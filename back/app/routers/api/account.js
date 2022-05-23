const { Router } = require('express');

const { accountController: controller } = require('../../controllers/api');
const validate = require('../../validation/validator');
const favorisCreateSchema = require('../../validation/schemas/favorisCreateSchema');
const reviewCreateSchema = require('../../validation/schemas/reviewCreateSchema');
const controllerHandler = require('../../helpers/controllerHandler');

const { cache, flush } = require('../../helpers/cache');

const router = Router();

// router.use(authentification);

router
    .route('/profile')
    /**
     * GET /api/account/profile
     * @summary Get to the user's profile
     * @tags Account
     * @return {[User]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.profilePage));

router
    .route('/journey')
    /**
     * GET /api/account/journey
     * @summary Get all destination results of the user
     * @tags Account
     * @return {[Account]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.getAllVoyages))
    /**
     * POST /api/account
     * @summary Register voyage of a user
     * @tags Account
     * @param {number} id.path.required - user identifier
     * @param {InputAccount} request.path.required - User info
     * @return {User} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
    */
    .post(controllerHandler(controller.registerVoyages));

router
    .route('/journey/:id(\\d+)')
    /**
     * DELETE /api/account/journey/{id}
     * @summary Delete one voyage
     * @tags Account
     * @param {number} id.path.required - journey identifier
     * @return {Account} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Journey not found - application/json
     */
    .delete(flush, controllerHandler(controller.deleteVoyages));

router
    .route('/favoris')
    /**
     * GET /api/account/favoris
     * @summary Get all registered favoris of the user
     * @tags Account
     * @return {[Account]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.getAllFavoris))
    /**
     * POST /api/account/favoris
     * @summary Register a favoris
     * @tags Account
     * @return {[Account]} 200 - success response - application/json
     */
    .post(validate('body', favorisCreateSchema), controllerHandler(controller.registerFavoris));

router
    .route('/favoris/:id(\\d+)')
    /**
     * DELETE /api/account/favoris/{id}
     * @summary Delete one favoris
     * @tags Account
     * @param {number} id.path.required - favoris identifier
     * @return {Account} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Favoris not found - application/json
     */
    .delete(flush, controllerHandler(controller.deleteFavoris));

router
    .route('/reviews')
    /**
     * GET /api/account/reviews
     * @summary Get all reviews of the user
     * @tags Account
     * @return {[Account]} 200 - success response - application/json
     */
    .get(cache, controllerHandler(controller.getAllReviews))
    /**
     * POST /api/account/reviews
     * @summary Create the review of a user
     * @tags Account
     * @param {number} id.path.required - review identifier
     * @param {InputAccount} request.path.required - User info
     * @return {Account} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - User not found - application/json
     */
    .post(validate('body', reviewCreateSchema), controllerHandler(controller.registerReviews));

router
    .route('/reviews/:id(\\d+)')
    /**
     * DELETE /api/account/reviews/{id}
     * @summary Delete one review
     * @tags Account
     * @param {number} id.path.required - favoris identifier
     * @return {Account} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Favoris not found - application/json
     */
    .delete(flush, controllerHandler(controller.deleteReviews));

module.exports = router;
