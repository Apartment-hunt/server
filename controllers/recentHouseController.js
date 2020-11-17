import recentHouseMessage from '../models/recentHouseMessage.js';


export const getRecentHouses = async (req, res) => {
    try {
        const recentHouses = await recentHouseMessage.find();
        res.status(200).send(recentHouses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const postRecentHouses = async (req, res) => {
    const { seviceTitle, price, location, noOfBedroom, noOfBirthroom, images } = req.body;

    console.log(req);
    // const Image = (Img) => {
    //     const newImg = Img.data;
    //     const encImg = newImg.toString('base64');
    //     const image = {
    //         contentType: Img.mimetype,
    //         size: Img.size,
    //         img: Buffer.from(encImg, 'base64')
    //     };
    //     return image;
    // }
    // const titleImage = Image(titleImg);
    
    // const recentHouse = {
    //     seviceTitle, 
    //     price, 
    //     location, 
    //     noOfBedroom, 
    //     noOfBirthroom,
    //     titleImage,
    // }

    // const newRecentHouse = new recentHouseMessage(recentHouse)
    // try {
    //     await newRecentHouse.save();
    //     res.status(201).send(newRecentHouse);
    // } catch (error) {
    //     res.status(404).json({ message: error.message });
    // }
}

export const getRecentSingleHouse = async (req, res) => {
    const id = req.params.id;
    try {
        const recentSingleHouse = await recentHouseMessage.find(id);
        res.status(200).send(recentSingleHouse);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateRecentHouse = async (req, res) => {
    const recentUpdateHouse = await recentHouseMessage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    try {
        res.status(200).json({ success: true, recentUpdateHouse, msg: 'product updated successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const DeleteRecentHouse = async (req, res) => {
    try {
        const DeleteHouse = await recentHouseMessage.findByIdAndRemove(req.params.id);
        res.status(200).json({ success: true, DeleteHouse, msg: 'house deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

