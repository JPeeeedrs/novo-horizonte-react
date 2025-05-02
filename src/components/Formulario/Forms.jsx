import { useState } from "react";
import axios from "axios";
import StepAluno from "./StepAlunos";

import StepMae from "./StepMae";
import StepPai from "./StepPai";

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
			dataNascimentoMae: "",
			enderecoMae: "",
			cepMae: "",
			cpfMae: "",
			rgMae: "",
			telefoneMae: "",
			emailMae: "",
			localProfissaoMae: "",
			trabalhoMae: "",
			telefoneTrabalhoMae: "",
		},
		pai: {
			nomePai: "",
			nascimentoPai: "",
			enderecoPai: "",
			cepPai: "",
			cpfPai: "",
			rgPai: "",
			telefonfonePai: "",
			emailPai: "",
			profissaoPai: "",
			trabalhoPai: "",
			telefoneTrabalhoPai: "",
		},
		respFinan: {
			respNome: "",
			respTelefone: "",
		},
		observacoes: {
			pessoasAutorizadas: "",
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
		if (name === "rg" || name === "rgMae" || name === "rgPai")
			maskedValue = maskRG(value);
		if (
			name === "dataNascimento" ||
			name === "nascimentoMae" ||
			name === "nascimentoPai"
		)
			maskedValue = maskDate(value); // Aplica a máscara de texto para data com validação de dia e mês
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
			// Enviar os dados de cada seção separadamente
			const alunoResponse = await api.post("/alunos", formData.aluno);
			const maeResponse = await api.post("/maes", formData.mae);
			const paiResponse = await api.post("/pais", formData.pai);
			const observacoesResponse = await api.post(
				"/observacoes",
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
				dataNascimentoMae: "",
				enderecoMae: "",
				cepMae: "",
				cpfMae: "",
				rgMae: "",
				telefoneMae: "",
				emailMae: "",
				profissaoMae: "",
				localTrabalhoMae: "",
				telefoneTrabalhoMae: "",
			},
			pai: {
				nomePai: "",
				nascimentoPai: "",
				enderecoPai: "",
				cepPai: "",
				cpfPai: "",
				rgPai: "",
				telefonfonePai: "",
				emailPai: "",
				profissaoPai: "",
				trabalhoPai: "",
				telefonfoneTrabalhoPai: "",
			},
			respFinan: {
				respNome: "",
				resptelefonFone: "",
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
			{step === 1 && (
				<StepAluno
					onNext={nextStep}
					formData={formData.aluno}
					onChange={(e) => handleChange("aluno", e)}
					loading={loading}
				/>
			)}
			{step === 2 && (
				<StepMae
					onNext={nextStep}
					onBack={prevStep}
					formData={formData.mae}
					onChange={(e) => handleChange("mae", e)}
				/>
			)}
			{step === 3 && (
				<StepPai
					onNext={nextStep}
					onBack={prevStep}
					formData={formData.pai}
					onChange={(e) => handleChange("pai", e)}
				/>
			)}
			{step === 4 && (
				<StepObservacoes
					onBack={prevStep}
					formData={formData.observacoes}
					onChange={(e) => handleChange("observacoes", e)}
					loading={loading}
					error={error} // Passa o erro como prop
				/>
			)}
		</form>
	);
}

export default Forms;
