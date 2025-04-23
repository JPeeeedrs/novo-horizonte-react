import { useState } from "react";

import StepAluno from "./StepAlunos";
import StepAnamnese from "./StepAnamnese";
import StepMae from "./StepMae";
import "../../styles/forms.css";
import StepPai from "./StepPai";
import StepRespFinan from "./StepRespFinan";
import StepObservacoes from "./StepObservacoes";

function Forms() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <form id="form">
      {step === 1 && <StepAluno onNext={nextStep} />}
      {step === 2 && <StepAnamnese onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <StepMae onNext={nextStep} onBack={prevStep} />}
      {step === 4 && <StepPai onNext={nextStep} onBack={prevStep} />}
      {step === 5 && <StepRespFinan onNext={nextStep} onBack={prevStep} />}
      {step === 6 && <StepObservacoes onBack={prevStep} />}
    </form>
  );
}

export default Forms;
