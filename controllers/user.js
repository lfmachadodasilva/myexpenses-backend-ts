"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndex = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
/**
 * GET /api/user
 */
exports.getIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listOfUsers = yield firebase_admin_1.default.auth().listUsers(1000);
        res.status(200).json(listOfUsers.users);
    }
    catch (_a) {
        res.status(400);
    }
    return res.json([
        { id: 'u1', name: 'User 1' },
        { id: 'u2', name: 'User 2' },
    ]);
});
//# sourceMappingURL=user.js.map