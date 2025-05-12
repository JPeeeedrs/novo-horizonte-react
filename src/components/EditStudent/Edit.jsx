// Importando imagens e sons
import golfre from "../../assets/images/golfre.jpg";
import sound from "../../assets/images/sound.mp3";
// import useRef useState axios useEffect
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// header e footer
import Header from "../../common/Header";
import Footer from "../../common/Footer";
// componentes steps
import EditStudent from "./EditStudent";
import EditMae from "./EditMae";
import EditPai from "./EditPai";
import EditObservacoes from "./EditObservacoes";
// css
import "../../styles/forms.css";
// mascaras
import {
	maskCPF,
	maskPhone,
	maskRG,
	maskCEP,
	maskEmail,
	maskDate,
} from "../../utils/mascaras";

// Configuração global do Axios
const api = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

function Edit() {
	const { id: alunoId } = useParams(); // Obtém o ID do aluno da URL
	const navigate = useNavigate(); // Hook para redirecionamento
	const [formData, setFormData] = useState({
		aluno: {
			nome: "",
			dataNascimento: "",
			naturalidade: "",
			nacionalidade: "",
			sexo: "",
			cpf: "",
			rg: "",
			anoLetivo: "",
			termo: "",
			folha: "",
			livro: "",
			matricula: "",
			turno: "",
			tipoSanguineo: "",
			raca: "",
		},
		mae: {
			nomeMae: "",
			nascimentoMae: "",
			enderecoMae: "",
			numeroCasaMae: "",
			cepMae: "",
			cpfMae: "",
			rgMae: "",
			telefoneMae: "",
			emailMae: "",
			profissaoMae: "",
			trabalhoMae: "",
			telefoneTrabalhoMae: "",
		},
		pai: {
			nomePai: "",
			nascimentoPai: "",
			enderecoPai: "",
			numeroCasaPai: "",
			cepPai: "",
			cpfPai: "",
			rgPai: "",
			telefonePai: "",
			emailPai: "",
			profissaoPai: "",
			trabalhoPai: "",
			telefoneTrabalhoPai: "",
		},
		observacoes: {
			matriculaTipo: "",
			escola: "",
			temIrmaos: "",
			irmaosNome: "",
			temEspecialista: "",
			especialista: "",
			temAlergias: "",
			alergia: "",
			temMedicamento: "",
			medicamento: "",
			reside: "",
			respNome: "",
			respTelefone: "",
			pessoasAutorizadas: "",
		},
	});
	const [jumpscare, setJumpscare] = useState(false);
	const audioRef = useRef(null);

	const [step, setStep] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Carregar informações do aluno
	useEffect(() => {
		const fetchStudentData = async () => {
			try {
				setLoading(true);
				const [alunoRes, maeRes, paiRes, observacoesRes] = await Promise.all([
					api.get(`/alunos/${alunoId}`),
					api.get(`/maes/${alunoId}`),
					api.get(`/pais/${alunoId}`),
					api.get(`/observacoes/${alunoId}`),
				]);

				setFormData({
					aluno: alunoRes.data,
					mae: maeRes.data,
					pai: paiRes.data,
					observacoes: observacoesRes.data,
				});
			} catch (err) {
				console.error("Erro ao carregar dados do aluno:", err);
				setError("Erro ao carregar dados do aluno");
			} finally {
				setLoading(false);
			}
		};

		if (alunoId) fetchStudentData();
	}, [alunoId]);

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	const handleChange = (stepName, e) => {
		const { name, value } = e.target;
		let maskedValue = value;
		// Aplica a máscara de texto para CPF, RG, telefone e data de nascimento
		if (name === "cpf" || name === "cpfMae" || name === "cpfPai")
			maskedValue = maskCPF(value);
		if (name === "rg" || name === "rgMae" || name === "rgPai")
			maskedValue = maskRG(value);
		if (
			name === "dataNascimento" ||
			name === "nascimentoMae" ||
			name === "nascimentoPai"
		)
			maskedValue = maskDate(value);
		if (
			name === "telefoneMae" ||
			name === "telefonePai" ||
			name === "respTelefone" ||
			name === "telefoneTrabalhoMae" ||
			name === "telefoneTrabalhoPai"
		)
			maskedValue = maskPhone(value);
		if (name === "cepMae" || name === "cepPai") maskedValue = maskCEP(value);
		if (name === "emailMae" || name === "emailPai")
			maskedValue = maskEmail(value);

		setFormData((prev) => ({
			...prev,
			[stepName]: { ...prev[stepName], [name]: maskedValue },
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			if (formData.aluno.nome.trim().toLowerCase() === "golden freddy") {
				setJumpscare(true);
				if (audioRef.current) audioRef.current.play();
				setTimeout(() => {
					setJumpscare(false);
				}, 4000);
				setLoading(false);
				return;
			}

			// Atualizar os dados de cada seção separadamente
			const alunoResponse = await api.put(`/alunos/${alunoId}`, formData.aluno);
			const maeResponse = await api.put(`/maes/${alunoId}`, formData.mae);
			const paiResponse = await api.put(`/pais/${alunoId}`, formData.pai);
			const observacoesResponse = await api.put(
				`/observacoes/${alunoId}`,
				formData.observacoes
			);

			const isSuccess = (response) => {
				return response.status === 200 || response.status === 201;
			};

			if (
				isSuccess(alunoResponse) &&
				isSuccess(maeResponse) &&
				isSuccess(paiResponse) &&
				isSuccess(observacoesResponse)
			) {
				alert(
					`Aluno ${alunoResponse.data.nome} e informações relacionadas atualizados com sucesso!`
				);
				navigate("/alunos"); // Redireciona para a página de alunos
			}
		} catch (error) {
			console.error("Erro:", error);
			setError(
				error.response?.data?.message ||
					"Erro ao atualizar aluno e informações relacionadas"
			);
		} finally {
			setLoading(false);
		}
	};

	// const resetForm = () => {
	// 	setFormData({
	// 		aluno: {
	// 			nome: "",
	// 			dataNascimento: "",
	// 			naturalidade: "",
	// 			nacionalidade: "",
	// 			sexo: "",
	// 			cpf: "",
	// 			rg: "",
	// 			anoLetivo: "",
	// 			termo: "",
	// 			folha: "",
	// 			livro: "",
	// 			matricula: "",
	// 			turno: "",
	// 			tipoSanguineo: "",
	// 			raca: "",
	// 		},
	// 		mae: {
	// 			nomeMae: "",
	// 			dataNascimentoMae: "",
	// 			enderecoMae: "",
	// 			numeroCasaMae: "",
	// 			cepMae: "",
	// 			cpfMae: "",
	// 			rgMae: "",
	// 			telefoneMae: "",
	// 			emailMae: "",
	// 			profissaoMae: "",
	// 			localTrabalhoMae: "",
	// 			telefoneTrabalhoMae: "",
	// 		},
	// 		pai: {
	// 			nomePai: "",
	// 			nascimentoPai: "",
	// 			enderecoPai: "",
	// 			numeroCasaPai: "",
	// 			cepPai: "",
	// 			cpfPai: "",
	// 			rgPai: "",
	// 			telefonfonePai: "",
	// 			emailPai: "",
	// 			profissaoPai: "",
	// 			trabalhoPai: "",
	// 			telefonfoneTrabalhoPai: "",
	// 		},
	// 		observacoes: {
	// 			medicamentos: "",
	// 			temirmao
	// 			respNome: "",
	// 			resptelefonFone: "",
	// 			pessoasAutorizadas: "",
	// 		},
	// 	});
	// 	setStep(1);
	// };

	return (
		<div>
			<Header />
			<div>
				<form id='form' onSubmit={handleSubmit}>
					{step === 1 && (
						<EditStudent
							onNext={nextStep}
							formData={formData.aluno}
							onChange={(e) => handleChange("aluno", e)}
							loading={loading}
						/>
					)}
					{step === 2 && (
						<EditMae
							onNext={nextStep}
							onBack={prevStep}
							formData={formData.mae}
							onChange={(e) => handleChange("mae", e)}
						/>
					)}
					{step === 3 && (
						<EditPai
							onNext={nextStep}
							onBack={prevStep}
							formData={formData.pai}
							onChange={(e) => handleChange("pai", e)}
						/>
					)}
					{step === 4 && (
						<EditObservacoes
							onBack={prevStep}
							formData={formData.observacoes}
							onChange={(e) => handleChange("observacoes", e)}
							loading={loading}
							error={error} // Passa o erro como prop
						/>
					)}
				</form>
				{jumpscare && (
					<div className='fixed inset-0 bg-black z-50 flex justify-center items-center'>
						<img
							src={golfre}
							alt='Golden Freddy'
							className='w-full h-full object-contain animate-pulse'
						/>
					</div>
				)}
				<audio ref={audioRef} src={sound} preload='auto' />
			</div>
			<Footer />
		</div>
	);
}

export default Edit;
