import { Response, Request } from 'express';

/**
 * GET /api/user
 */
export const getIndex = (req: Request, res: Response) => {
    res.json([
        { id: 'u1', name: 'User 1' },
        { id: 'u2', name: 'User 2' },
    ]);
};
