import { Response, Request, Router } from 'express';

const router = Router();

/**
 * GET /api/label
 */
router.get('/api/label', (request: Request, response: Response) => {
    return response
        .json([
            { id: 'l1', name: 'Label 1' },
            { id: 'l2', name: 'Label 2' },
        ])
        .status(200)
        .send();
});

export { router as labelRouter };
