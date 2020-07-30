"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Routers (route handlers)
const home_1 = require("./routers/home");
const user_1 = require("./routers/user");
const group_1 = require("./routers/group");
const label_1 = require("./routers/label");
const expense_1 = require("./routers/expense");
// Create Express server
const app = express_1.default();
// Define port to be used
app.set('port', process.env.PORT || 3000);
// Use json
app.use(express_1.default.json());
// Use routers
app.use(expense_1.expenseRouter);
app.use(group_1.groupRouter);
app.use(home_1.homeRouter);
app.use(label_1.labelRouter);
app.use(user_1.userRouter);
exports.default = app;
//# sourceMappingURL=app.js.map