import { useState } from "react";
import axios from "axios";
import StepAluno from "./StepAlunos";
import StepAnamnese from "./StepAnamnese";
import StepMae from "./StepMae";
import StepPai from "./StepPai";
import StepRespFinan from "./StepRespFinan";
import StepObservacoes from "./StepObservacoes";
import "../../styles/forms.css";

// Configuração global do Axios
const api = axios.create({
  baseURL: "http://localhost:8080/api",
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
      data_nascimento: "",
      naturalidade: "",
      nacionalidade: "",
      sexo: "",
      cpf_aluno: "",
      rg_aluno: "",
      ano_letivo: "",
      termo: "",
      folha: "",
      livro: "",
      matricula: "",
      turno: "",
      tipo_sanguineo: "",
      raca: "",
    },
    anamnese: {
      matriculaTipo: "",
      escola: "",
      temIrmaos: "",
      irmaos_nome: "",
      irmaos_turma: "",
      temEspecialista: "",
      especialista: "",
      temAlergias: "",
      alergia: "",
      temMedicamento: "",
      medicamento: "",
      reside: "",
    },
    mae: {
      nome_mae: "",
      nascimento_mae: "",
      endereco_mae: "",
      cep_mae: "",
      cpf_mae: "",
      rg_mae: "",
      fone_mae: "",
      email_mae: "",
      profissao_mae: "",
      trabalho_mae: "",
      fone_trabalho_mae: "",
    },
    pai: {
      nome_pai: "",
      nascimento_pai: "",
      endereco_pai: "",
      cep_pai: "",
      cpf_pai: "",
      rg_pai: "",
      fone_pai: "",
      email_pai: "",
      profissao_pai: "",
      trabalho_pai: "",
      fone_trabalho_pai: "",
    },
    respFinan: {
      resp_nome: "",
      resp_fone: "",
    },
    observacoes: {
      pessoas_autorizadas: "",
      documentos: [],
      valor_contrato: "",
      vencimento: "",
    },
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (stepName, e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [stepName]: {
          ...prev[stepName],
          [name]: checked
            ? [...prev[stepName][name], value]
            : prev[stepName][name].filter((item) => item !== value),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [stepName]: { ...prev[stepName], [name]: value },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Preparar payload completo
      const payload = {
        ...formData.aluno,
        ...formData.anamnese,
        ...formData.mae,
        ...formData.pai,
        ...formData.respFinan,
        documentos_apresentados: formData.observacoes.documentos,
        pessoas_autorizadas: formData.observacoes.pessoas_autorizadas,
        valor_contrato: formData.observacoes.valor_contrato,
        vencimento: formData.observacoes.vencimento,
      };

      // Enviar via Axios
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
        data_nascimento: "",
        naturalidade: "",
        nacionalidade: "",
        sexo: "",
        cpf_aluno: "",
        rg_aluno: "",
        ano_letivo: "",
        termo: "",
        folha: "",
        livro: "",
        matricula: "",
        turno: "",
        tipo_sanguineo: "",
        raca: "",
      },
      anamnese: {
        matriculaTipo: "",
        escola: "",
        temIrmaos: "",
        irmaos_nome: "",
        irmaos_turma: "",
        temEspecialista: "",
        especialista: "",
        temAlergias: "",
        alergia: "",
        temMedicamento: "",
        medicamento: "",
        reside: "",
      },
      mae: {
        nome_mae: "",
        nascimento_mae: "",
        endereco_mae: "",
        cep_mae: "",
        cpf_mae: "",
        rg_mae: "",
        fone_mae: "",
        email_mae: "",
        profissao_mae: "",
        trabalho_mae: "",
        fone_trabalho_mae: "",
      },
      pai: {
        nome_pai: "",
        nascimento_pai: "",
        endereco_pai: "",
        cep_pai: "",
        cpf_pai: "",
        rg_pai: "",
        fone_pai: "",
        email_pai: "",
        profissao_pai: "",
        trabalho_pai: "",
        fone_trabalho_pai: "",
      },
      respFinan: {
        resp_nome: "",
        resp_fone: "",
      },
      observacoes: { documentos: [] },
    });
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger mb-3">{error}</div>}

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
