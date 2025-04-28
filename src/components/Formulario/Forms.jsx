import { useState } from "react";

// Steps
import StepAluno from "./StepAlunos";
import StepAnamnese from "./StepAnamnese";
import StepMae from "./StepMae";
import "../../styles/forms.css";
import StepPai from "./StepPai";
import StepRespFinan from "./StepRespFinan";
import StepObservacoes from "./StepObservacoes";

function Forms() {
  const [formData, setFormData] = useState({
    aluno: {},
    anamnese: {},
    mae: {},
    pai: {},
    respFinan: {},
    observacoes: { documentos: [] },
  });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (stepName, e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [stepName]: {
        ...prev[stepName],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Preparar os dados para envio
    const dadosCompletos = {
      ...formData.aluno,
      ...formData.mae,
      ...formData.pai,
      ...formData.respFinan,
      pessoasAutorizadas: formData.observacoes.pessoas_autorizadas,
      documentosApresentados: formData.observacoes.documentos,
      valorContrato: formData.observacoes.valor_contrato,
      vencimento: formData.observacoes.vencimento,
    };

    try {
      const response = await fetch("http://localhost:8080/aluno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosCompletos),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Aluno ${data.nome} cadastrado com sucesso! ID: ${data.id}`);
        // Resetar formulário
        setFormData({
          aluno: {},
          anamnese: {},
          mae: {},
          pai: {},
          respFinan: {},
          observacoes: { documentos: [] },
        });
        setStep(1);
      } else {
        throw new Error("Erro ao cadastrar");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar aluno. Verifique o console para mais detalhes.");
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {step === 1 && (
        <StepAluno
          onNext={nextStep}
          formData={formData}
          setFormData={setFormData}
          onChange={(e) => handleChange("aluno", e)}
        />
      )}
      {step === 2 && (
        <StepAnamnese
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
          onChange={(e) => handleChange("anamnese", e)}
        />
      )}
      {step === 3 && (
        <StepMae
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
          onChange={(e) => handleChange("mae", e)}
        />
      )}
      {step === 4 && (
        <StepPai
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
          onChange={(e) => handleChange("pai", e)}
        />
      )}
      {step === 5 && (
        <StepRespFinan
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
          onChange={(e) => handleChange("respFinan", e)}
        />
      )}
      {step === 6 && (
        <StepObservacoes
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
          onChange={(e) => handleChange("observacoes", e)}
          onSubmit={handleSubmit}
        />
      )}
    </form>
  );
}

export default Forms;
