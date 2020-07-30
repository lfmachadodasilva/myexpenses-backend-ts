import { Response, Request, Router } from 'express';

const router = Router();

/**
 * GET /api/group
 */
router.get('/api/group', (request: Request, response: Response) => {
    const a = 5;

    return response
        .json([
            { id: 'g1', name: 'Group 1' },
            { id: 'g2', name: 'Group 2' }
        ])
        .status(200)
        .send();
});

export { router as groupRouter };
