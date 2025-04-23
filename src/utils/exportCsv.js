import Papa from "papaparse";

export function exportarParaCsv() {
  const formElement = document.getElementById("form");

  if (!formElement) {
    console.error("Formulário não encontrado.");
    return;
  }

  const formData = new FormData(formElement);
  const dados = {};

  for (const [key, value] of formData.entries()) {
    if (dados[key]) {
      dados[key] = Array.isArray(dados[key])
        ? [...dados[key], value]
        : [dados[key], value];
    } else {
      dados[key] = value;
    }
  }

  const csv = Papa.unparse([dados]);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "formulario.csv";
  a.click();
}
