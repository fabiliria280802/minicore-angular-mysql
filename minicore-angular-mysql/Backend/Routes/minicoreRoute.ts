import { Router, Request, Response } from 'express';
import { getAllClients, getAllContrats, getReport } from '../Controllers/minicoreController';

const router = Router();

router.get('/clients', (req: Request, res: Response) => {
    getAllClients(req, res);
});

router.get('/contrats', (req: Request, res: Response) => {
    getAllContrats(req, res);
});

router.post('/report', (req: Request, res: Response) => {
    getReport(req, res);
});

export default router;

