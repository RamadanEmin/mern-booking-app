import express, { Request, Response } from 'express';
import verifyToken from '../middleware/auth';

const router = express.Router();

router.get('/validate-token', verifyToken, (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId })
});

export default router;