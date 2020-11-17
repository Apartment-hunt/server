import bookingsMessage from '../models/bookingsMessage.js';

export const getBookings = async (req, res) => {
    try {
        const bookings = await bookingsMessage.find();
        res.status(200).send(bookings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const postBooking = async (req, res) => {
    const booking = req.body;
    const newBooking = new bookingsMessage(booking)
    try {
        await newBooking.save();
        res.status(201).send(newBooking);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getSingleUserBookings = async (req, res) => {
    try {
        const bookings = await bookingsMessage.find({email:req.params.email});
        res.status(201).send(bookings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
