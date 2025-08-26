import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TaskDetailPage from './pages/TaskDetailPage';
import ProjectForm from './components/Projects/ProjectForm';
import TaskForm from './components/Tasks/TaskForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            <Route path="/projects" element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            } />
            
            <Route path="/projects/new" element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            } />
            
            <Route path="/projects/:id/edit" element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            } />
            
            <Route path="/projects/:projectId" element={
              <ProtectedRoute>
                <ProjectDetailPage />
              </ProtectedRoute>
            } />
            
            <Route path="/projects/:projectId/tasks/new" element={
              <ProtectedRoute>
                <TaskForm />
              </ProtectedRoute>
            } />
            
            <Route path="/tasks/:id" element={
              <ProtectedRoute>
                <TaskDetailPage />
              </ProtectedRoute>
            } />
            
            <Route path="/tasks/:id/edit" element={
              <ProtectedRoute>
                <TaskForm />
              </ProtectedRoute>
            } />
            
            <Route path="/" element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;