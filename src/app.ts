import express from 'express';

// Controllers (route handlers)
import * as homeController from './controllers/home';
import * as userController from './controllers/user';
import * as groupController from './controllers/group';
import * as labelController from './controllers/label';
import * as expenseController from './controllers/expense';

// Create Express server
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/api/', homeController.getIndex);
app.get('/api/expense', expenseController.getIndex);
app.get('/api/user', userController.getIndex);
app.get('/api/group', groupController.getIndex);
app.get('/api/label', labelController.getIndex);
app.get('/api/expense', expenseController.getIndex);

export default app;
