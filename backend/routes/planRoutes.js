const express = require("express");
const planRouter = express.Router();
const { protectRoute, isAuthorized } = require("../controllers/authController");
const {
  getPlan,
  getAllPlans,
  createPlan,
  updatePlan,
  deletePlan,
  topPlans,
  deleteField,
  deleteNote,
  deletePlace,
  deleteDayNote,
  deletePlacesItinerary,
} = require("../controllers/planController");

// planRouter.route('/allPlans')
// .get(getAllPlans)

//own plan
// planRouter.use(protectRoute)//needs to be logged in
planRouter.route("/plan/:id").get(getPlan);

// planRouter.use(isAuthorized(['admin','user']));
// planRouter
// .route('/plan')
// .post(createPlan)

planRouter.route("/plan").post(createPlan);

planRouter.route("/plan/:id").patch(updatePlan).delete(deletePlan);

planRouter.route("/plan/:planId/places/:placeId").delete(deletePlace);

planRouter
  .route("/plan/:planId/places/:placeId/notes/:noteId")
  .delete(deleteNote);

planRouter
  .route("/plan/:planId/itinerary/:itineraryId/daynotes/:dayNoteId")
  .delete(deleteDayNote);

planRouter
  .route("/plan/:planId/itinerary/:itineraryId/placesitinerary/:placesItineraryId")
  .delete(deletePlacesItinerary);

module.exports = planRouter;
