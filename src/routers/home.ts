import { Response, Request, Router } from 'express';

const router = Router();

/**
 * GET /api/home
 */
router.get('/api/home', (request: Request, response: Response) => {
    response.json({ test: 'test' }).status(200).send();
});

export { router as homeRouter };
