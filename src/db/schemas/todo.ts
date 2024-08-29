import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema: Schema<ITodo> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo: Model<ITodo> =
  mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema);

export default Todo;
