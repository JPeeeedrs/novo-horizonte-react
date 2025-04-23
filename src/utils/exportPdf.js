import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// import { form } from "../components/Formulario/Forms";

export function exportarParaPdf() {
  const formElement = document.querySelector("form");

  if (!formElement) {
    console.error("Formulário não encontrado.");
    return;
  }

  const dados = {};
  const inputs = formElement.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    const { name, value, type, checked } = input;

    if (!name) return; // Ignorar elementos sem nome

    try {
      if (type === "checkbox" || type === "radio") {
        if (checked) {
          if (dados[name]) {
            dados[name] = Array.isArray(dados[name])
              ? [...dados[name], value]
              : [dados[name], value];
          } else {
            dados[name] = value;
          }
        }
      } else {
        if (dados[name]) {
          dados[name] = Array.isArray(dados[name])
            ? [...dados[name], value]
            : [dados[name], value];
        } else {
          dados[name] = value;
        }
      }
    } catch (error) {
      console.error(`Erro ao processar o campo ${name}:`, error);
    }
  });

  try {
    const doc = new jsPDF();
    doc.text("Dados do Formulário", 14, 20);

    const tabela = Object.entries(dados).map(([campo, valor]) => {
      const valorFinal = Array.isArray(valor) ? valor.join(", ") : valor;
      return [campo, valorFinal];
    });

    autoTable(doc, {
      startY: 30,
      head: [["Campo", "Valor"]],
      body: tabela,
    });

    doc.save("formulario.pdf");
  } catch (error) {
    console.error("Erro ao gerar o PDF:", error);
  }
}
