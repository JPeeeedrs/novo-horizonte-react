import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const login = (username, password) => {
		setUser(username);
		setPass(password);
		setIsLoggedIn(true);
	};

	const logout = () => {
		setUser("");
		setPass("");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, user, pass, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
