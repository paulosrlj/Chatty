import express from 'express';
import { join } from 'path';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import './database';

import { routes } from './routes';

const app = express();

app.use(express.static(join(__dirname, '..', 'public')));
app.set('views', join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  return res.render('html/client.html');
});

const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo ws (websocket)

io.on('connection', (socket: Socket) => {
  console.log('Se conectou', socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };
