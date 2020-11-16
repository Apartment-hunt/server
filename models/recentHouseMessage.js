import mongoose from 'mongoose';

const recentHouseSchema = mongoose.Schema({
    seviceTitle: String,
    price : Number,
    location : String,
    noOfBedroom : String,
    noOfBirthroom : String,
    titleImage : Buffer,
    bimage1 : Buffer,
    bimage2 : Buffer,
    bimage3 : Buffer
})

const recentHouseMessage = mongoose.model('RecentHouseMessage',recentHouseSchema);

export default recentHouseMessage;