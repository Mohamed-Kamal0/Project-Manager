import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  status: {
    type: String,
    enum: ['ToDo', 'InProgress', 'Done'],
    default: 'ToDo'
  }
}, {
  timestamps: true
});

export default mongoose.model('Task', taskSchema);