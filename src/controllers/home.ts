import { Response, Request } from 'express';

/**
 * GET /api/
 */
export const getIndex = (req: Request, res: Response) => {
    res.json({ test: 'test' });
};
