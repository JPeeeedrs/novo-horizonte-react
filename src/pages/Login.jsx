// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
import Footer from '../common/Footer';
import Header from '../common/Header';
import "../global.css";
import "../styles/login.css";

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(user, pass)) {
      navigate('/alunos');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return ( <div>
    <Header />
    <div className="login-container">
	<form onSubmit={handleSubmit} className="login-form">
		<h2>Login Administrativo</h2>
		<label>Usuário</label>
		<input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
		<label>Senha</label>
		<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
		<button type="submit">Entrar</button>
	</form>
</div>

    <Footer />
    </div>
  );
};

export default Login;
