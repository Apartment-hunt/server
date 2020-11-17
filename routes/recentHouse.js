import express from 'express';
import {
    getRecentHouses,
    postRecentHouses,
    getRecentSingleHouse,
    updateRecentHouse,
    DeleteRecentHouse
} from '../controllers/recentHouseController.js';

const router = express.Router();

router.get('/', getRecentHouses);
router.get('/:id', getRecentSingleHouse);
router.post('/', postRecentHouses);
router.put('/:id', updateRecentHouse);
router.delete('/:id', DeleteRecentHouse);

export default router;