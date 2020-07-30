"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const express_1 = require("express");
const router = express_1.Router();
exports.userRouter = router;
/**
 * GET /api/users
 */
router.get('/api/users', async (request, response) => {
    try {
        const listOfUsers = await firebase_admin_1.default.auth().listUsers(1000);
        return response.status(200).json(listOfUsers.users).send();
    }
    catch (_a) {
        return response.status(400).send();
    }
});
/**
 * GET /api/user
 */
router.get('/api/user', async (request, response) => {
    return response
        .json([
        { id: 'u1', name: 'User 1' },
        { id: 'u2', name: 'User 2' }
    ])
        .send();
});
//# sourceMappingURL=user.js.map