import mongoose from 'mongoose';

const recentHouseSchema = mongoose.Schema({
    seviceTitle: String,
    price : Number,
    location : String,
    noOfBedroom : String,
    noOfBirthroom : String,
    images : [{type: Buffer}]
})

const recentHouseMessage = mongoose.model('RecentHouseMessage',recentHouseSchema);

export default recentHouseMessage;