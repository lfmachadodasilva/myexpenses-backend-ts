import { Response, Request } from 'express';
import admin from 'firebase-admin';

/**
 * GET /api/user
 */
export const getIndex = async (req: Request, res: Response) => {
    try {
        const listOfUsers = await admin.auth().listUsers(1000);
        res.status(200).json(listOfUsers.users);
    } catch {
        res.status(400);
    }

    return res.json([
        { id: 'u1', name: 'User 1' },
        { id: 'u2', name: 'User 2' },
    ]);
};
