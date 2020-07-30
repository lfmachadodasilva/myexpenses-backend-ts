"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRouter = void 0;
const express_1 = require("express");
const router = express_1.Router();
exports.groupRouter = router;
/**
 * GET /api/group
 */
router.get('/api/group', (request, response) => {
    const a = 5;
    return response
        .json([
        { id: 'g1', name: 'Group 1' },
        { id: 'g2', name: 'Group 2' }
    ])
        .status(200)
        .send();
});
//# sourceMappingURL=group.js.map