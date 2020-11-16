import express from 'express';
import {
    getBookings,
    postBooking,
    getSingleUserBookings
} from '../controllers/bookingsController.js';

const router = express.Router();

router.get('/', getBookings);
router.post('/', postBooking);
router.get('/:email', getSingleUserBookings);

export default router;