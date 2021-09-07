import 'dotenv/config';
import express from 'express';
import UserControllers from './app/controllers/UserControllers';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
const port = process.env.PORT;

app.use(express.json());

app.use('/admin/queues', BullBoard.UI);

app.post('/users', UserControllers.Store);

app.listen(port, () => {
    console.log(`--> Server running on the ${port}`)
});