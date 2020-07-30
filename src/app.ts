import express from 'express';

// Routers (route handlers)
import { homeRouter } from './routers/home';
import { userRouter } from './routers/user';
import { groupRouter } from './routers/group';
import { labelRouter } from './routers/label';
import { expenseRouter } from './routers/expense';

// Create Express server
const app = express();

// Define port to be used
app.set('port', process.env.PORT || 3000);

// Use json
app.use(express.json());

// Use routers
app.use(expenseRouter);
app.use(groupRouter);
app.use(homeRouter);
app.use(labelRouter);
app.use(userRouter);

export default app;
