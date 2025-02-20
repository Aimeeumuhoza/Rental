import express from "express";
import { BookingController } from "../controllers/booking.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = express.Router();

// router.use(authenticateJWT);

// Renter routes
router.post("/", BookingController.createBooking);
router.get("/renter", BookingController.getRenterBookings);

// Host routes
router.get("/property/:propertyId", BookingController.getPropertyBookings);
router.put("/:id/status", BookingController.updateBookingStatus);

router.get("/:id", BookingController.getBookingById);

export default router;
