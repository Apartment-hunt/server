import mongoose from 'mongoose';

const recentHouseSchema = mongoose.Schema({
    title: String,
    price : Number,
    location : String,
    bathroom : String,
    bedroom : String,
    roomDetails : String,
    propertyDetails : String,
    priceDetails : String,
    titileImg : Object,
    images : Object,
})

const recentHouseMessage = mongoose.model('RecentHouseMessage',recentHouseSchema);

export default recentHouseMessage;