"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndex = void 0;
/**
 * GET /api/label
 */
exports.getIndex = (req, res) => {
    res.json([
        { id: 'l1', name: 'Label 1' },
        { id: 'l2', name: 'Label 2' },
    ]);
};
//# sourceMappingURL=label.js.map