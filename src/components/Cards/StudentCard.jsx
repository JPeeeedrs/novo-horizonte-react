import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/alunos.css";
import SearchBar from "./SearchBar";
import StudentCardItem from "./CardItem";

const StudentCard = () => {
	const [alunos, setAlunos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [allData, setAllData] = useState([]);
	const [openDropdowns, setOpenDropdowns] = useState({});
	const navigate = useNavigate();

	function nameNull(value) {
		if (
			!value ||
			value.trim() === "" ||
			value === "00/00/0000" ||
			value === "(00) 00000-0000"
		) {
			return "Não informado";
		}
		return value;
	}

	const toggleDropdown = (id) => {
		setOpenDropdowns((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const deleteStudent = async (id) => {
		try {
			const palavraChave = "DELETAR";
			const resposta = window.prompt(
				`Digite "${palavraChave}" para confirmar a exclusão do aluno:`
			);
			if (resposta === null || resposta !== palavraChave) {
				alert("Ação cancelada. Confirmação inválida.");
				return;
			}

			await axios.delete(`http://localhost:8080/alunos/${id}`);
			await axios.delete(`http://localhost:8080/maes/${id}`);
			await axios.delete(`http://localhost:8080/pais/${id}`);
			await axios.delete(`http://localhost:8080/observacoes/${id}`);
			setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== id));
			setAllData((prevAllData) =>
				prevAllData.filter((aluno) => aluno.id !== id)
			);
		} catch (err) {
			console.error("Erro ao deletar aluno:", err);
			setError("Erro ao deletar aluno");
		}
	};

	// Carrega dados iniciais
	useEffect(() => {
		const fetchInitialData = async () => {
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
					const mae = maesRes.data.find((m) => m.idMae === aluno.id) || {};
					const pai = paisRes.data.find((p) => p.idPai === aluno.id) || {};
					const obs =
						observacoesRes.data.find((o) => o.idObservacoes === aluno.id) || {};

					return {
						...aluno,
						nomeMae: nameNull(mae.nomeMae),
						nascimentoMae: nameNull(mae.nascimentoMae),
						enderecoMae: nameNull(mae.enderecoMae),
						numeroCasaMae: nameNull(mae.numeroCasaMae),
						cepMae: nameNull(mae.cepMae),
						cpfMae: nameNull(mae.cpfMae),
						rgMae: nameNull(mae.rgMae),
						telefoneMae: nameNull(mae.telefoneMae),
						emailMae: nameNull(mae.emailMae),
						profissaoMae: nameNull(mae.profissaoMae),
						trabalhoMae: nameNull(mae.trabalhoMae),
						telefoneTrabalhoMae: nameNull(mae.telefoneTrabalhoMae),
						nomePai: nameNull(pai.nomePai),
						nascimentoPai: nameNull(pai.nascimentoPai),
						numeroCasaPai: nameNull(pai.numeroCasaPai),
						enderecoPai: nameNull(pai.enderecoPai),
						cepPai: nameNull(pai.cepPai),
						cpfPai: nameNull(pai.cpfPai),
						rgPai: nameNull(pai.rgPai),
						telefonePai: nameNull(pai.telefonePai),
						emailPai: nameNull(pai.emailPai),
						profissaoPai: nameNull(pai.profissaoPai),
						trabalhoPai: nameNull(pai.trabalhoPai),
						telefoneTrabalhoPai: nameNull(pai.telefoneTrabalhoPai),
						...obs,
					};
				});

				setAllData(alunosData);
				setAlunos(alunosData);
			} catch (err) {
				setError("Erro ao carregar dados iniciais");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchInitialData();
	}, []);

	// Busca dinâmica
	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async () => {
			try {
				if (!searchTerm.trim()) {
					setAlunos(allData);
					return;
				}

				// Faz todas as requisições em paralelo
				const [alunosPorNome, maesPorNome, paisPorNome, alunosPorCpf] =
					await Promise.all([
						axios.get(
							`http://localhost:8080/alunos/buscarPorNome?nome=${searchTerm}`,
							{
								signal: controller.signal,
							}
						),
						axios.get(
							`http://localhost:8080/maes/buscarPorNome?nomeMae=${searchTerm}`,
							{
								signal: controller.signal,
							}
						),
						axios.get(
							`http://localhost:8080/pais/buscarPorNome?nomePai=${searchTerm}`,
							{
								signal: controller.signal,
							}
						),
						axios.get(
							`http://localhost:8080/alunos/buscarPorCpf?cpf=${searchTerm}`,
							{
								signal: controller.signal,
							}
						),
					]);

				// Coleta todos os IDs relevantes
				const alunoIds = new Set();

				// 1. Alunos por nome
				alunosPorNome.data.forEach((aluno) => alunoIds.add(aluno.id));

				// 2. Mães encontradas -> busca alunos relacionados
				maesPorNome.data.forEach((mae) => {
					const alunosDaMae = allData.filter((aluno) => aluno.id === mae.idMae);
					alunosDaMae.forEach((aluno) => alunoIds.add(aluno.id));
				});

				// 3. Pais encontrados -> busca alunos relacionados
				paisPorNome.data.forEach((pai) => {
					const alunosDoPai = allData.filter((aluno) => aluno.id === pai.idPai);
					alunosDoPai.forEach((aluno) => alunoIds.add(aluno.id));
				});

				// 4. Alunos por CPF
				alunosPorCpf.data.forEach((aluno) => alunoIds.add(aluno.id));

				// Filtra alunos com base nos IDs coletados
				const resultados = Array.from(alunoIds)
					.map((id) => allData.find((aluno) => aluno.id === id))
					.filter(Boolean);

				setAlunos(resultados);
			} catch (error) {
				if (!axios.isCancel(error)) {
					console.error("Erro na busca:", error);
					setError("Erro ao realizar busca");
				}
			}
		};

		const debounceTimer = setTimeout(fetchData, 300);
		return () => {
			controller.abort();
			clearTimeout(debounceTimer);
		};
	}, [searchTerm, allData]);

	if (loading) return <p>Carregando...</p>;
	if (error) return <p className='text-danger'>{error}</p>;

	return (
		<div className='student-container'>
			<SearchBar
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder='Buscar por CPF, nome, pai ou mãe...'
			/>

			{loading ? (
				<div className='loading-text'>
					<p>Carregando dados dos alunos...</p>
					<div className='spinner'></div>
				</div>
			) : error ? (
				<div className='error-message'>{error}</div>
			) : (
				<div className='student-grid'>
					{alunos.map((aluno) => (
						<StudentCardItem
							key={aluno?.id}
							aluno={aluno}
							isOpen={openDropdowns[aluno?.id]}
							toggleDropdown={toggleDropdown}
							deleteStudent={deleteStudent}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default StudentCard;
