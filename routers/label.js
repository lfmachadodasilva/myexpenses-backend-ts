"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelRouter = void 0;
const express_1 = require("express");
const router = express_1.Router();
exports.labelRouter = router;
/**
 * GET /api/label
 */
router.get('/api/label', (request, response) => {
    return response
        .json([
        { id: 'l1', name: 'Label 1' },
        { id: 'l2', name: 'Label 2' },
    ])
        .status(200)
        .send();
});
//# sourceMappingURL=label.js.map