import express, { Request, Response } from 'express';
import Hotel from '../models/hotel';

const router = express.Router();

router.get('/search', async (req: Request, res: Response) => {
    try {
        let sortOptions = {};
        switch (req.query.sortOption) {
            case 'starRating':
                sortOptions = { starRating: - 1 };
            case "pricePerNightAsc":
                sortOptions = { pricePerNight: 1 };
                break;
            case "pricePerNightDesc":
                sortOptions = { pricePerNight: -1 };
                break;
        }

        const pageSize = 5;
        const pageNumber = parseInt(req.query.page ? req.query.page.toString() : '1');
        const skip = (pageNumber - 1) * pageSize;

        const hotels = await Hotel.find().sort(sortOptions).skip(skip).limit(pageSize);

        const total = await Hotel.countDocuments();

        const response = {
            data: hotels,
            pagination: {
                total,
                page: pageNumber,
                pages: Math.ceil(total / pageSize)
            }
        };

        res.json(response);
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});



export default router;