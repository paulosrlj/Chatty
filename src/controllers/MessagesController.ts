import { Request, Response } from 'express';
import { Message } from '../entities/Message';
import { MessagesService } from '../services/MessageService';

class MessagesController {
  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;
    const messagesService = new MessagesService();

    console.log({ admin_id, text, user_id });
    const message = messagesService.create({
      admin_id,
      text,
      user_id,
    });

    return response.json(message);
  }
  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return response.json(list);
  }
}
export { MessagesController };
