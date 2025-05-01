import { useState } from "react";
import axios from "axios";
import StepAluno from "./StepAlunos";
import StepAnamnese from "./StepAnamnese";
import StepMae from "./StepMae";
import StepPai from "./StepPai";
import StepRespFinan from "./StepRespFinan";
import StepObservacoes from "./StepObservacoes";
import "../../styles/forms.css";
import {
	maskCPF,
	maskPhone,
	maskRG,
	maskCEP,
	maskEmail,
	maskDate,
} from "../../utils/macaras";

// Configuração global do Axios
const api = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

function Forms() {
	const [formData, setFormData] = useState({
		aluno: {
			nome: "",
			idade: "",
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
			cepMae: "",
			cpfMae: "",
			rgMae: "",
			foneMae: "",
			emailMae: "",
			profissaoMae: "",
			trabalhoMae: "",
			foneTrabalhoMae: "",
		},
		pai: {
			nomePai: "",
			nascimentoPai: "",
			enderecoPai: "",
			cepPai: "",
			cpfPai: "",
			rgPai: "",
			fonePai: "",
			emailPai: "",
			profissaoPai: "",
			trabalhoPai: "",
			foneTrabalhoPai: "",
		},
		respFinan: {
			respNome: "",
			respFone: "",
		},
		observacoes: {
			pessoasAutorizadas: "",
			documentos: [],
			valorContrato: "",
			vencimento: "",
		},
	});

	const [step, setStep] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	const handleChange = (stepName, e) => {
		const { name, value } = e.target;
		let maskedValue = value;

		if (name === "cpf") maskedValue = maskCPF(value);
		if (name === "rg") maskedValue = maskRG(value);
		if (
			name === "dataNascimento" ||
			name === "nascimentoMae" ||
			name === "nascimentoPai"
		)
			maskedValue = maskDate(value); // Aplica a máscara de texto para data com validação de dia e mês
		if (name === "foneMae" || name === "fonePai" || name === "respFone")
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
			const payload = {
				...formData.aluno,
				...formData.mae,
				...formData.pai,
				...formData.respFinan,
				...formData.observacoes,
			};

			const response = await api.post("/alunos", payload);

			if (response.status === 201) {
				alert(`Aluno ${response.data.nome} cadastrado com sucesso!`);
				resetForm();
			}
		} catch (error) {
			console.error("Erro:", error);
			setError(error.response?.data?.message || "Erro ao cadastrar aluno");
		} finally {
			setLoading(false);
		}
	};

	const resetForm = () => {
		setFormData({
			aluno: {
				nome: "",
				idade: "",
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
				cepMae: "",
				cpfMae: "",
				rgMae: "",
				foneMae: "",
				emailMae: "",
				profissaoMae: "",
				trabalhoMae: "",
				foneTrabalhoMae: "",
			},
			pai: {
				nomePai: "",
				nascimentoPai: "",
				enderecoPai: "",
				cepPai: "",
				cpfPai: "",
				rgPai: "",
				fonePai: "",
				emailPai: "",
				profissaoPai: "",
				trabalhoPai: "",
				foneTrabalhoPai: "",
			},
			respFinan: {
				respNome: "",
				respFone: "",
			},
			observacoes: {
				pessoasAutorizadas: "",
				documentos: [],
				valorContrato: "",
				vencimento: "",
			},
		});
		setStep(1);
	};

	return (
		<form id='form' onSubmit={handleSubmit}>
			{error && <div className='alert alert-danger mb-3'>{error}</div>}

			{step === 1 && (
				<StepAluno
					onNext={nextStep}
					formData={formData.aluno}
					onChange={(e) => handleChange("aluno", e)}
					loading={loading}
				/>
			)}
			{step === 2 && (
				<StepAnamnese
					onNext={nextStep}
					onBack={prevStep}
					formData={formData.anamnese}
					onChange={(e) => handleChange("anamnese", e)}
				/>
			)}
			{step === 3 && (
				<StepMae
					onNext={nextStep}
					onBack={prevStep}
					formData={formData.mae}
					onChange={(e) => handleChange("mae", e)}
				/>
			)}
			{step === 4 && (
				<StepPai
					onNext={nextStep}
					onBack={prevStep}
					formData={formData.pai}
					onChange={(e) => handleChange("pai", e)}
				/>
			)}
			{step === 5 && (
				<StepRespFinan
					onNext={nextStep}
					onBack={prevStep}
					formData={formData.respFinan}
					onChange={(e) => handleChange("respFinan", e)}
				/>
			)}
			{step === 6 && (
				<StepObservacoes
					onBack={prevStep}
					formData={formData.observacoes}
					onChange={(e) => handleChange("observacoes", e)}
					loading={loading}
				/>
			)}
		</form>
	);
}

export default Forms;
