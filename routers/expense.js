"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseRouter = void 0;
const express_1 = require("express");
const router = express_1.Router();
exports.expenseRouter = router;
/**
 * GET /api/expense
 */
router.get('/api/expense', (_request, response) => {
    response
        .json([
        { id: 'e1', name: 'Expense 1' },
        { id: 'e2', name: 'Expense 2' }
    ])
        .status(200)
        .send();
});
//# sourceMappingURL=expense.js.map