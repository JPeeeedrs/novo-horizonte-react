// // src/utils/auth.js
// export const login = async (username, password) => {
// 	try {
// 		const response = await fetch("http://seu-backend.com/api/login", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ username, password }),
// 		});

// 		if (!response.ok) {
// 			return false;
// 		}

// 		const data = await response.json();
// 		return data.token; // Seu backend deve retornar um token JWT
// 	} catch (error) {
// 		console.error("Erro no login:", error);
// 		return false;
// 	}
// };
