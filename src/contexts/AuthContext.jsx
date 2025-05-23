// // src/contexts/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
// 	const [isAuthenticated, setIsAuthenticated] = useState(false);

// 	// Verifica a autenticação ao carregar o componente
// 	useEffect(() => {
// 		const token = localStorage.getItem("token");
// 		if (token) {
// 			setIsAuthenticated(true);
// 		}
// 	}, []);

// 	const login = (token) => {
// 		localStorage.setItem("token", token);
// 		setIsAuthenticated(true);
// 	};

// 	const logout = () => {
// 		localStorage.removeItem("token");
// 		setIsAuthenticated(false);
// 	};

// 	return (
// 		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// export const useAuth = () => useContext(AuthContext);
