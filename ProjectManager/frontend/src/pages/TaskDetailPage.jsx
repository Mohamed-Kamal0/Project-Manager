import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const TaskDetailPage = () => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    try {
      const response = await api.get(`/tasks/${id}`);
      setTask(response.data);
    } catch (err) {
      setError('Failed to fetch task');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!task) return <div>Task not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link
        to={`/projects/${task.projectId._id}`}
        className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block"
      >
        ← Back to Project
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-semibold">Status:</label>
            <p className="capitalize">{task.status}</p>
          </div>
          <div>
            <label className="font-semibold">Created:</label>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold">Project:</label>
          <p>{task.projectId.title}</p>
        </div>

        {task.projectId.description && (
          <div>
            <label className="font-semibold">Project Description:</label>
            <p className="text-gray-600">{task.projectId.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetailPage;