import { useEffect, useState } from "react";
import axios from "axios";

function StudentCard() {
	const [alunos, setAlunos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const [alunosRes, maesRes, paisRes, observacoesRes] = await Promise.all(
					[
						axios.get("http://localhost:8080/alunos"),
						axios.get("http://localhost:8080/maes"),
						axios.get("http://localhost:8080/pais"),
						axios.get("http://localhost:8080/observacoes"),
					]
				);

				const alunosData = alunosRes.data.map((aluno) => {
					// usa o nome de campo exato que o JSON devolve:
					const mae = maesRes.data.find((m) => m.idMae === aluno.id) || {};
					const pai = paisRes.data.find((p) => p.idPai === aluno.id) || {};
					const obs =
						observacoesRes.data.find((o) => o.idObservacoes === aluno.id) || {};

					return {
						...aluno,
						nomeMae: mae.nomeMae,
						enderecoMae: mae.enderecoMae,
						telefoneMae: mae.telefoneMae,
						trabalhoMae: mae.trabalhoMae,
						telefoneTrabalhoMae: mae.telefoneTrabalhoMae,

						nomePai: pai.nomePai,
						enderecoPai: pai.enderecoPai,
						telefonePai: pai.telefonePai,
						trabalhoPai: pai.trabalhoPai,
						telefoneTrabalhoPai: pai.telefoneTrabalhoPai,

						temEspecialista: obs.temEspecialista,
						especialista: obs.especialista,
						temAlergias: obs.temAlergias,
						alergia: obs.alergia,
						temMedicamento: obs.temMedicamento,
						medicamento: obs.medicamento,
						reside: obs.reside,
						respNome: obs.respNome,
						respTelefone: obs.respTelefone,
						pessoasAutorizadas: obs.pessoasAutorizadas,
					};
				});

				setAlunos(alunosData);
			} catch (err) {
				console.error(err);
				setError("Erro ao carregar os dados dos alunos.");
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) return <p>Carregando...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className='container' style={{ backgroundColor: "#902121" }}>
			<div className='row'>
				{alunos.map((aluno) => (
					<div className='col-12 col-md-6 col-lg-4 mb-3' key={aluno.id}>
						<div className='card h-100' style={{ backgroundColor: "#acacac" }}>
							<div className='card-body'>
								<h5 className='card-title'>{aluno.nome}</h5>
								{/* ...demais campos do aluno */}

								<hr />
								<h6>Mãe</h6>
								<p>Nome: {aluno.nomeMae}</p>
								<p>Endereço: {aluno.enderecoMae}</p>
								<p>Telefone: {aluno.telefoneMae}</p>
								<p>Trabalho: {aluno.trabalhoMae}</p>
								<p>Tel. Trabalho: {aluno.telefoneTrabalhoMae}</p>

								<hr />
								<h6>Pai</h6>
								<p>Nome: {aluno.nomePai}</p>
								<p>Endereço: {aluno.enderecoPai}</p>
								<p>Telefone: {aluno.telefonePai}</p>
								<p>Trabalho: {aluno.trabalhoPai}</p>
								<p>Tel. Trabalho: {aluno.telefoneTrabalhoPai}</p>

								<hr />
								<h6>Observações</h6>
								{aluno.temEspecialista === "sim" && (
									<p>Especialista: {aluno.especialista}</p>
								)}
								{aluno.temAlergias === "sim" && <p>Alergia: {aluno.alergia}</p>}
								{aluno.temMedicamento === "sim" && (
									<p>Medicamento: {aluno.medicamento}</p>
								)}

								<hr />
								<p>Reside com: {aluno.reside}</p>
								<p>Responsável Financeiro: {aluno.respNome}</p>
								<p>Tel. Responsável: {aluno.respTelefone}</p>
								<p>Pessoas Autorizadas: {aluno.pessoasAutorizadas}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default StudentCard;
