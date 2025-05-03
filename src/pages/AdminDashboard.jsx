// src/pages/AdminDashboard.jsx
import { logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Área Administrativa</h2>
      <button onClick={handleLogout}>Sair</button>
      {/* Aqui você puxa dados dos alunos e adiciona a lógica de deletar/visualizar */}
    </div>
  );
};

export default AdminDashboard;
