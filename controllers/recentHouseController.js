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
    const { title, price, location, bathroom, bedroom, roomDetails, propertyDetails, priceDetails } = req.body;
    // console.log(req.files);
    const Image = (Img) => {
        const newImg = Img.data;
        const encImg = newImg.toString('base64');
        const image = {
            contentType: Img.mimetype,
            size: Img.size,
            img: Buffer.from(encImg, 'base64')
        };
        return image;
    }
    const titileImg = Image(req.files.img0);
    const img1 = Image(req.files.img1);
    const img2 = Image(req.files.img2);
    const img3 = Image(req.files.img3);
    const img4 = Image(req.files.img4);
    // console.log(img0);
    const images = [img1, img2, img3, img4];

    const recentHouse = {
        title,
        price,
        location,
        bathroom,
        bedroom,
        titileImg,
        images,
        roomDetails,
        propertyDetails,
        priceDetails
    }
    const newRecentHouse = new recentHouseMessage(recentHouse)
    try {
        await newRecentHouse.save();
        console.log(newRecentHouse);
        res.status(201).send(newRecentHouse);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    }
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

