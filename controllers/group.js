"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndex = void 0;
/**
 * GET /api/group
 */
exports.getIndex = (req, res) => {
    res.json([
        { id: 'g1', name: 'Group 1' },
        { id: 'g2', name: 'Group 2' },
    ]);
};
//# sourceMappingURL=group.js.map