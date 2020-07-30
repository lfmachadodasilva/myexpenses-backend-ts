import { Response, Request, Router } from 'express';

const router = Router();

/**
 * GET /api/expense
 */
router.get('/api/expense', (_request: Request, response: Response) => {
    response
        .json([
            { id: 'e1', name: 'Expense 1' },
            { id: 'e2', name: 'Expense 2' }
        ])
        .status(200)
        .send();
});

export { router as expenseRouter };
