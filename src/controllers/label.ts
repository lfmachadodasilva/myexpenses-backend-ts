import { Response, Request } from 'express';

/**
 * GET /api/label
 */
export const getIndex = (req: Request, res: Response) => {
    res.json([
        { id: 'l1', name: 'Label 1' },
        { id: 'l2', name: 'Label 2' },
    ]);
};
