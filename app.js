"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Controllers (route handlers)
const homeController = __importStar(require("./controllers/home"));
const userController = __importStar(require("./controllers/user"));
const groupController = __importStar(require("./controllers/group"));
const labelController = __importStar(require("./controllers/label"));
const expenseController = __importStar(require("./controllers/expense"));
// Create Express server
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.get('/api/', homeController.getIndex);
app.get('/api/expense', expenseController.getIndex);
app.get('/api/user', userController.getIndex);
app.get('/api/group', groupController.getIndex);
app.get('/api/label', labelController.getIndex);
app.get('/api/expense', expenseController.getIndex);
exports.default = app;
//# sourceMappingURL=app.js.map