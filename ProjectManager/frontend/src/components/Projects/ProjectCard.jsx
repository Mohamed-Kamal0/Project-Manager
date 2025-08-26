import { Link } from 'react-router-dom';

const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {new Date(project.createdAt).toLocaleDateString()}
        </span>
        <div className="space-x-2">
          <Link
            to={`/projects/${project._id}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            View
          </Link>
          <Link
            to={`/projects/${project._id}/edit`}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(project._id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;