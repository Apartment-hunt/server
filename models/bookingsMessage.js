import mongoose from 'mongoose';

const bookingsSchema = mongoose.Schema({
    name: String,
    email : String,
    phone : Number,
    message : String,
    status : String,
})
const bookingsMessage = mongoose.model('BookingsMessage',bookingsSchema);

export default bookingsMessage;