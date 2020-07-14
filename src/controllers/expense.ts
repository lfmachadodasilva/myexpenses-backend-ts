import { Response, Request } from 'express';

/**
 * GET /api/expense
 */
export const getIndex = (req: Request, res: Response) => {
    res.json([
        { id: 'e1', name: 'Expense 1' },
        { id: 'e2', name: 'Expense 2' },
    ]);
};
