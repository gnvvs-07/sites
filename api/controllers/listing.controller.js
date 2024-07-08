import Listing from "../models/listing.model.js";

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
