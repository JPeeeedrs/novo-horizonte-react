// Importando imagens e sons
import golfre from "../../assets/images/golfre.jpg";
import sound from "../../assets/images/sound.mp3";
import milkshake from "../../assets/images/milkshake.mp3";
// import useRef useState axios
import { useState, useRef } from "react";
import axios from "axios";
import * as yup from "yup";
// componentes steps
import StepAluno from "./StepAlunos";
import StepMae from "./StepMae";
import StepPai from "./StepPai";
import StepObservacoes from "./StepObservacoes";
// css
import "../../styles/forms.css";
// mascaras
import {
	maskName,
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
			temMae: true,
			nomeMae: "",
			dataNascimentoMae: "",
			enderecoMae: "",
			numeroCasaMae: "",
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
			temPai: true,
			nomePai: "",
			nascimentoPai: "",
			enderecoPai: "",
			numeroCasaPai: "",
			cepPai: "",
			cpfPai: "",
			rgPai: "",
			telefonfonePai: "",
			emailPai: "",
			profissaoPai: "",
			trabalhoPai: "",
			telefonfoneTrabalhoPai: "",
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

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	const handleChange = async (stepName, e) => {
		const { name, value, type, checked } = e.target;
		let maskedValue = value;

		// Aplica as máscaras
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

		if (
			name === "nomeMae" ||
			name === "nomePai" ||
			name === "respNome" ||
			name === "nome" ||
			name === "naturalidade" ||
			name === "nacionalidade" ||
			name === "profissaoMae" ||
			name === "profissaoPai" ||
			name === "escola" ||
			name === "irmaoNome" ||
			name === "especialista" ||
			name === "reside" ||
			name === "pessoasAutorizadas"
		)
			maskedValue = maskName(value);

		// Atualiza o campo normalmente
		setFormData((prev) => ({
			...prev,
			[stepName]: { ...prev[stepName], [name]: maskedValue },
		}));

		// Se for o CEP da mãe, busca o nome da rua automaticamente
		if (name === "cepMae" || name === "cepPai") {
			const cepNumeros = value.replace(/\D/g, "");
			if (cepNumeros.length === 8) {
				try {
					const response = await fetch(
						`https://viacep.com.br/ws/${cepNumeros}/json/`
					);
					const data = await response.json();

					if (!data.erro && data.logradouro) {
						setFormData((prev) => ({
							...prev,
							[stepName]: {
								...prev[stepName],
								enderecoMae: data.logradouro,
								enderecoPai: data.logradouro,
							},
						}));
					}
				} catch (error) {
					console.error("Erro ao buscar o CEP:", error);
				}
			}
		}
	};

	const validationSchema = yup.object().shape({
		aluno: yup.object().shape({
			nome: yup.string().required("O nome é obrigatório"),
			dataNascimento: yup
				.string()
				.required("A data de nascimento é obrigatória"),
			naturalidade: yup.string().required("A naturalidade é obrigatória"),
			nacionalidade: yup.string().required("A nacionalidade é obrigatória"),
			sexo: yup.string().required("O sexo é obrigatório"),
			cpf: yup.string().required("O CPF é obrigatório"),
			rg: yup.string().required("O RG é obrigatório"),
			anoLetivo: yup.string().required("O ano letivo é obrigatório"),
			termo: yup.string().required("O termo é obrigatório"),
			folha: yup.string().required("A folha é obrigatória"),
			livro: yup.string().required("O livro é obrigatório"),
			matricula: yup.string().required("A matricula é obrigatória"),
			turno: yup.string().required("O turno é obrigatório"),
			tipoSanguineo: yup.string().required("O tipo sanguineo é obrigatório"),
			raca: yup.string().required("A raca é obrigatória"),
		}),
		mae: yup.object().when("temMae", {
			is: true,
			then: yup.object().shape({
				nomeMae: yup.string().required("O nome da mae é obrigatório"),
				nascimentoMae: yup
					.string()
					.required("A data de nascimento é obrigatória"),
				enderecoMae: yup.string().required("O endereço da mae é obrigatório"),
				cepMae: yup.string().required("O CEP da mae é obrigatório"),
				cpfMae: yup.string().required("O CPF da mae é obrigatório"),
			}),
		}),
		pai: yup.object().when("temPai", {
			is: true,
			then: yup.object().shape({
				nomePai: yup.string().required("O nome do pai é obrigatório"),
				nascimentoPai: yup
					.string()
					.required("A data de nascimento é obrigatória"),
				enderecoPai: yup.string().required("O endereço do pai é obrigatório"),
				cepPai: yup.string().required("O CEP do pai é obrigatório"),
				cpfPai: yup.string().required("O CPF do pai é obrigatório"),
			}),
		}),
		observacoes: yup.object().shape({
			respNome: yup.string().required("As observações é obrigatória"),
		}),
	});

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

			if (formData.aluno.nome.trim().toLowerCase() === "milkshake de morango") {
				const audio = new Audio(milkshake);
				audio.play();
				setLoading(false);
				return;
			}

			// Enviar os dados de cada seção separadamente endpoints
			const alunoResponse = await api.post("/alunos", formData.aluno);
			const alunoId = alunoResponse.data.id;
			const maeData = { ...formData.mae, alunoId };
			await api.post("/maes", maeData);
			const paiData = { ...formData.pai, alunoId };
			await api.post("/pais", paiData);
			const observacoesData = { ...formData.observacoes, alunoId };
			await api.post("/observacoes", observacoesData);

			alert(
				`Aluno ${alunoResponse.data.nome} e informações relacionadas cadastrados com sucesso!`
			);
			resetForm();
			// }
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
				nascimentoMae: "",
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
		setStep(1);
	};

	return (
		<div>
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
	);
}

export default Forms;
