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

  const handleSubimit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="form">
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
          onSubmit={handleSubimit}
        />
      )}
    </form>
  );
}

export default Forms;
