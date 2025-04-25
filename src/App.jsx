import { BrowserRouter, Routes, Route } from "react-router-dom";

// importar Paginas
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Alunos from "./pages/Alunos";

// importar icons
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/alunos" element={<Alunos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
