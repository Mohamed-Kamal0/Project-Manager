import { Link } from 'react-router-dom';

const statusColors = {
  ToDo: 'bg-gray-100 text-gray-800',
  InProgress: 'bg-yellow-100 text-yellow-800',
  Done: 'bg-green-100 text-green-800'
};

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
        <div className="space-x-2">
          <Link
            to={`/tasks/${task._id}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            View
          </Link>
          <Link
            to={`/tasks/${task._id}/edit`}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;