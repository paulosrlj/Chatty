import express from 'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import './database';

import { routes } from './routes';

const app = express();

const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo ws (websocket)

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server is running on port 3333'));
