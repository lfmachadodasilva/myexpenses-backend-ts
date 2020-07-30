"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const router = express_1.Router();
exports.homeRouter = router;
/**
 * GET /api/home
 */
router.get('/api/home', (request, response) => {
    response.json({ test: 'test' }).status(200).send();
});
//# sourceMappingURL=home.js.map