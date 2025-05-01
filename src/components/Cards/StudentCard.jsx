import { useEffect, useState } from "react";
import axios from "axios";

function StudentCard() {
	const [alunos, setAlunos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAlunos = async () => {
			try {
				const response = await axios.get("http://localhost:8080/alunos");
				setAlunos(response.data);
			} catch (err) {
				setError("Erro ao carregar os dados dos alunos.");
			} finally {
				setLoading(false);
			}
		};

		fetchAlunos();
	}, []);

	if (loading) return <p>Carregando...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div
			className='container'
			style={{
				backgroundColor: "#902121",
			}}
		>
			<div className='row'>
				{alunos.map((aluno, index) => (
					<div className='col-12 col-md-6 col-lg-4 mb-3' key={index}>
						<div className='card h-100' style={{ backgroundColor: "#acacac" }}>
							<div className='card-body d-flex flex-column align-items-center'>
								<h5 className='card-title'>{aluno.nome}</h5>
								<p className='card-text'>Sexo: {aluno.sexo}</p>
								<p className='card-text'>CPF: {aluno.cpf}</p>
								<p className='card-text'>RG: {aluno.rg}</p>
								<p className='card-text'>Ano Letivo: {aluno.anoLetivo}</p>
								<p className='card-text'>Turno: {aluno.turno}</p>
								<p className='card-text'>
									Tipo Sanguíneo: {aluno.tipoSanguineo}
								</p>
								<p className='card-text'>Nome da Mãe: {aluno.nomeMae}</p>
								<p className='card-text'>
									Endereço da Mãe: {aluno.enderecoMae}
								</p>
								<p className='card-text'>
									Telefone da Mãe: {aluno.telefoneMae}
								</p>
								<p className='card-text'>
									Trabalho da Mãe: {aluno.trabalhoMae}
								</p>
								<p className='card-text'>
									Telefone do Trabalho da Mãe: {aluno.telefoneTrabalhoMae}
								</p>
								<p className='card-text'>Nome do Pai: {aluno.nomePai}</p>
								<p className='card-text'>
									Endereço do Pai: {aluno.enderecoPai}
								</p>
								<p className='card-text'>
									Telefone do Pai: {aluno.telefonePai}
								</p>
								<p className='card-text'>
									Trabalho do Pai: {aluno.trabalhoPai}
								</p>
								<p className='card-text'>
									Telefone do Trabalho do Pai: {aluno.telefoneTrabalhoPai}
								</p>
								{aluno.temEspecialista === "sim" && (
									<p className='card-text'>
										Especialista: {aluno.especialista}
									</p>
								)}
								{aluno.temAlergias === "sim" && (
									<p className='card-text'>Alergia: {aluno.alergia}</p>
								)}
								{aluno.temMedicamento === "sim" && (
									<p className='card-text'>Medicamento: {aluno.medicamento}</p>
								)}
								<p className='card-text'>Reside com: {aluno.reside}</p>
								<p className='card-text'>
									Responsável Financeiro: {aluno.respNome}
								</p>
								<p className='card-text'>
									Telefone do Responsável: {aluno.respTelefone}
								</p>
								<p className='card-text'>
									Pessoas Autorizadas: {aluno.pessoasAutorizadas}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default StudentCard;
