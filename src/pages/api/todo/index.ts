import connectDB from '@/db';
import Todo, { ITodo } from '@/db/schemas/todo';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  data?: ITodo[] | ITodo | {};
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.find({});
        res.status(200).json({ success: true, data: todos });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const todo = await Todo.create(req.body);
        res.status(201).json({ success: true, data: todo });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id } = req.body;
        const todo = await Todo.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!todo) {
          return res
            .status(404)
            .json({ success: false, error: 'Todo not found' });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const deletedTodo = await Todo.deleteOne({ _id: id });
        if (!deletedTodo) {
          return res
            .status(404)
            .json({ success: false, error: 'Todo not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
