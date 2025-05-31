import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import LgpdInfo from "./pages/LgpdInfo";
import Alunos from "./pages/Alunos";
import Edit from "./components/EditStudent/Edit";
import SobreNos from "./pages/SobreNos";

import "./global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/formulario' element={<Formulario />} />
				<Route path='/lgpd-info' element={<LgpdInfo />} />
				<Route path='/alunos' element={<Alunos />} />
				<Route path='/editar/:id' element={<Edit />} />
				<Route path='sobrenos' element={<SobreNos />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
