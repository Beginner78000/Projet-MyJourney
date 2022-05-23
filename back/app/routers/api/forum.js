const { Router } = require('express');

const { forumController: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');

const { cache } = require('../../helpers/cache');

const router = Router();


router
    .route('/rubrics/:id(\\d+)')
    /**
     * GET /api/rubrics/{id}
     * @summary Get one rubric
     * @tags Forum
     * @param {number} id.path.required - rubric identifier
     * @return {Forum} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Rubric not found - application/json
     */
    .get(cache, controllerHandler(controller.getOneRubric));

router
    .route('/countries/:country')
    /**
     * GET /api/destinations/countries/{country}
     * @summary Get destinations by country
     * @tags Destination
     * @param {string} request.path.required - country info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getDestinationByCountry));

router
    .route('/search')
    /**
     * GET /api/destinations/search
     * @summary Find a destination
     * @tags Search
     * @param {string} name.path.required - country identifier
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.search));

router
    .route('/:id(\\d+)/activities')
    /**
     * GET /api/destinations/{id}/activities
     * @summary Get activities by destination
     * @tags Destination
     * @param {string} request.path.required - country info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getActivitiesByDestination));

router
    .route('/:id(\\d+)/activities/by-square')
    /**
     * GET /api/destinations/{id}/activities/by-square
     * @summary Get activities by destination square zone
     * @tags Destination
     * @param {string} request.path.required - country info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getActivitiesByDestinationSquare));

router
    .route('/:id(\\d+)/hotels')
    /**
     * GET /api/destinations/{id}/hotels
     * @summary Get hotels by destination
     * @tags Destination
     * @param {string} request.path.required - country info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getHotelsByDestination));

router
    .route('/:id(\\d+)/hotels/by-square')
    /**
     * GET /api/destinations/{id}/hotels/by-square
     * @summary Get hotels by destination square zone
     * @tags Destination
     * @param {string} request.path.required - country info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getHotelsByDestinationSquare));

router
    .route('/:id(\\d+)/pois')
    /**
     * GET /api/destinations/{id}/pois
     * @summary Get pois by destination
     * @tags Destination
     * @param {string} request.path.required - country info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getPoisByDestination));

router
    .route('/:id(\\d+)/pois/by-square')
    /**
     * GET /api/destinations/{id}/pois/by-square
     * @summary Get pois by destination square zone
     * @tags Destination
     * @param {string} request.path.required - country info
     * @return {[Destination]} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Country not found - application/json
     */
    .get(cache, controllerHandler(controller.getPoisByDestinationSquare));

module.exports = router;
