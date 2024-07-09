import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    // add a list
    const listing = await Listing.create(req.body);
    // send the listing
    res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  // find all listings
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "No Listing Found"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "Not Authorized to Delete this Listing"));
  }
  // delete the listing
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing Deleted");
  } catch (error) {
    next(error);
  }
};
