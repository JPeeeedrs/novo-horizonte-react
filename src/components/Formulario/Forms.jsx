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

		if (name === "cpf" || name === "cpfMae" || name === "cpfPai")
			maskedValue = maskCPF(value);
		if (name === "rg") maskedValue = maskRG(value);
		if (
			name === "dataNascimento" ||
			name === "nascimentoMae" ||
			name === "nascimentoPai"
		)
			maskedValue = maskDate(value); // Aplica a máscara de texto para data com validação de dia e mês
		if (
			name === "foneMae" ||
			name === "fonePai" ||
			name === "respFone" ||
			name === "foneTrabalhoMae" ||
			name === "foneTrabalhoPai"
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
			// Enviar os dados de cada seção separadamente
			const alunoResponse = await api.post("/alunos", formData.aluno);
			const anamneseResponse = await api.post(
				"/alunos/${alunoResponse.data.id}/anamnese",
				formData.anamnese
			);
			const maeResponse = await api.post(
				`/alunos/${alunoResponse.data.id}/mae`,
				formData.mae
			);
			const paiResponse = await api.post(
				`/alunos/${alunoResponse.data.id}/pai`,
				formData.pai
			);
			const respFinanResponse = await api.post(
				`/alunos/${alunoResponse.data.id}/respFinan`,
				formData.respFinan
			);
			const observacoesResponse = await api.post(
				`/alunos/${alunoResponse.data.id}/observacoes`,
				formData.observacoes
			);

			if (
				alunoResponse.status === 201 &&
				anamneseResponse.status === 201 &&
				maeResponse.status === 201 &&
				paiResponse.status === 201 &&
				respFinanResponse.status === 201 &&
				observacoesResponse.status === 201
			) {
				alert(
					`Aluno ${alunoResponse.data.nome} e informações relacionadas cadastrados com sucesso!`
				);
				resetForm();
			}
		} catch (error) {
			console.error("Erro:", error);
			setError(
				error.response?.data?.message ||
					"Erro ao cadastrar aluno e informações relacionadas"
			);
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
