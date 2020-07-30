import admin from 'firebase-admin';
import { Response, Request, Router } from 'express';

const router = Router();

/**
 * GET /api/users
 */
router.get('/api/users', async (request: Request, response: Response) => {
    try {
        const listOfUsers = await admin.auth().listUsers(1000);
        return response.status(200).json(listOfUsers.users).send();
    } catch {
        return response.status(400).send();
    }
});

/**
 * GET /api/user
 */
router.get('/api/user', async (request: Request, response: Response) => {
    return response
        .json([
            { id: 'u1', name: 'User 1' },
            { id: 'u2', name: 'User 2' }
        ])
        .send();
});

export { router as userRouter };
