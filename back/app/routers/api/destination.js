const { Router } = require('express');

const { destinationController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');

const { cache } = require('../../helpers/cache');

const router = Router();

router
    .route('/:id(\\d+)')
    /**
     * GET /api/destinations/{id}
     * @summary Get one destination
     * @tags Destination
     * @param {number} id.path.required - destination identifier
     * @return {Destination} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Destination not found - application/json
     */
    .get(cache, controllerHandler(controller.getOne));

router
    .route('/search')
    /**
     * GET /api/destinations/search
     * @summary Find a destination
     * @tags Search
     * @param {string} request.path.required - continent info
     * @param {string} request.path.required - country info
     * @param {string} request.path.required - city_name info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.search));

router
    .route('/country')
    /**
     * GET /api/destinations/country
     * @summary Get destinations by country
     * @tags Destination
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getDestinationByCountry));

router
    .route('/:id(\\d+)/activities')
    /**
     * GET /api/destinations/{id}/activities
     * @summary Get activities by destination
     * @tags Destination
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Activitie not found - application/json
     */
    .get(cache, controllerHandler(controller.getActivitiesByDestination));

router
    .route('/:id(\\d+)/hotels')
    /**
     * GET /api/destinations/{id}/hotels
     * @summary Get hotels by destination
     * @tags Destination
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Hotel not found - application/json
     */
    .get(cache, controllerHandler(controller.getHotelsByDestination));

router
    .route('/:id(\\d+)/restaurants')
    /**
     * GET /api/destinations/{id}/restaurants
     * @summary Get restaurants by destination
     * @tags Destination
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Restaurant not found - application/json
     */
    .get(cache, controllerHandler(controller.getRestaurantsByDestination));

module.exports = router;
