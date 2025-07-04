import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/alunos.css";
import "../../styles/login.css";
import SearchBar from "./SearchBar";
import StudentCardItem from "./CardItem";
import { useAuth } from "../../contexts/AuthContext";

// Adicione as credenciais básicas para autenticação nos endpoints protegidos
const axiosInstance = axios.create({
	baseURL: "https://api.novohorizonteteresopolis.com.br",
	headers: { "Content-Type": "application/json" },
	withCredentials: true, // Garante envio de cookies em todas as requisições
});

const StudentCard = () => {
	const [alunos, setAlunos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [allData, setAllData] = useState([]);
	const [openDropdowns, setOpenDropdowns] = useState({});
	const { isLoggedIn, user, pass, login } = useAuth();
	const [loginUser, setLoginUser] = useState("");
	const [loginPass, setLoginPass] = useState("");

	async function handleLoginSubmit(event) {
		event.preventDefault();
		try {
			const res = await fetch(
				"https://api.novohorizonteteresopolis.com.br/login",
				{
					method: "POST",
					credentials: "include", // Garante envio/recebimento de cookies de sessão
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ login: loginUser, senha: loginPass }),
				}
			);
			if (res.ok) {
				login(loginUser, loginPass);
			} else {
				const errorMsg = await res.text();
				alert("Usuário ou senha inválidos. Mensagem do servidor: " + errorMsg);
			}
		} catch (error) {
			alert(
				"Erro ao tentar conectar com o servidor. Verifique se a API está rodando."
			);
			console.error("Erro de rede no login:", error);
		}
	}

	function nameNull(value) {
		if (
			!value ||
			value.trim() === "" ||
			value === "00/00/0000" ||
			value === "(00) 00000-0000" ||
			value === 0
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

	const basicAuth =
		user && pass ? { auth: { username: user, password: pass } } : {};

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

			await axiosInstance.delete(`/alunos/${id}`, basicAuth);
			await axiosInstance.delete(`/maes/${id}`, basicAuth);
			await axiosInstance.delete(`/pais/${id}`, basicAuth);
			await axiosInstance.delete(`/observacoes/${id}`, basicAuth);
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
		if (!isLoggedIn) return;

		const fetchInitialData = async () => {
			setLoading(true);
			try {
				const [alunosRes, maesRes, paisRes, observacoesRes] = await Promise.all(
					[
						axiosInstance.get("/alunos", basicAuth),
						axiosInstance.get("/maes", basicAuth),
						axiosInstance.get("/pais", basicAuth),
						axiosInstance.get("/observacoes", basicAuth),
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
	}, [isLoggedIn, user, pass]);

	// Busca dinâmica
	useEffect(() => {
		if (!isLoggedIn) return;

		const controller = new AbortController();

		const fetchData = async () => {
			try {
				if (!searchTerm.trim()) {
					setAlunos(allData);
					return;
				}

				const [alunosPorNome, maesPorNome, paisPorNome, alunosPorCpf] =
					await Promise.all([
						axiosInstance.get(`/alunos/buscarPorNome?nome=${searchTerm}`, {
							signal: controller.signal,
							...basicAuth,
						}),
						axiosInstance.get(`/maes/buscarPorNome?nomeMae=${searchTerm}`, {
							signal: controller.signal,
							...basicAuth,
						}),
						axiosInstance.get(`/pais/buscarPorNome?nomePai=${searchTerm}`, {
							signal: controller.signal,
							...basicAuth,
						}),
						axiosInstance.get(`/alunos/buscarPorCpf?cpf=${searchTerm}`, {
							signal: controller.signal,
							...basicAuth,
						}),
					]);

				const alunoIds = new Set();

				alunosPorNome.data.forEach((aluno) => alunoIds.add(aluno.id));
				maesPorNome.data.forEach((mae) => {
					const alunosDaMae = allData.filter((aluno) => aluno.id === mae.idMae);
					alunosDaMae.forEach((aluno) => alunoIds.add(aluno.id));
				});
				paisPorNome.data.forEach((pai) => {
					const alunosDoPai = allData.filter((aluno) => aluno.id === pai.idPai);
					alunosDoPai.forEach((aluno) => alunoIds.add(aluno.id));
				});
				alunosPorCpf.data.forEach((aluno) => alunoIds.add(aluno.id));

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
	}, [searchTerm, allData, isLoggedIn, user, pass]);

	if (!isLoggedIn) {
		return (
			<div className='login-container'>
				<div className='login-form'>
					<h2>Login</h2>
					<form onSubmit={handleLoginSubmit}>
						<label>Usuário</label>
						<input
							value={loginUser}
							onChange={(e) => setLoginUser(e.target.value)}
							required
						/>
						<label>Senha</label>
						<input
							type='password'
							value={loginPass}
							onChange={(e) => setLoginPass(e.target.value)}
							required
						/>
						<button type='submit'>Entrar</button>
					</form>
				</div>
			</div>
		);
	}

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
