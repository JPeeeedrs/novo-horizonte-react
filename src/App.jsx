import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Alunos from "./pages/Alunos";
import Login from "./pages/Login";
import Edit from "./components/EditStudent/Edit";

// Rota privada
import PrivateRoute from "./components/PrivateRoutes";

import "./global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/formulario' element={<Formulario />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/alunos'
					element={
						<PrivateRoute>
							<Alunos />
						</PrivateRoute>
					}
				/>
				<Route path='/editar/:id' element={<Edit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
