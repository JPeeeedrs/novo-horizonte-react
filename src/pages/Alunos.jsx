import Footer from "../common/Footer";
import Header from "../common/Header";

// importar alunos
import StudentCard from "../components/Cards/StudentCard";
function Alunos() {
  return (
    <div className="Alunos d-flex flex-column min-vh-100">
      <Header />

      <main>
        <StudentCard />
      </main>

      <Footer />
    </div>
  );
}

export default Alunos;
