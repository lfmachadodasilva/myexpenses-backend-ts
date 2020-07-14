import { Response, Request } from 'express';

/**
 * GET /api/group
 */
export const getIndex = (req: Request, res: Response) => {
    res.json([
        { id: 'g1', name: 'Group 1' },
        { id: 'g2', name: 'Group 2' },
    ]);
};
