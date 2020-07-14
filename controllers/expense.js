"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndex = void 0;
/**
 * GET /api/expense
 */
exports.getIndex = (req, res) => {
    res.json([
        { id: 'e1', name: 'Expense 1' },
        { id: 'e2', name: 'Expense 2' },
    ]);
};
//# sourceMappingURL=expense.js.map