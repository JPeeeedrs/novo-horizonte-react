import { jsPDF } from "jspdf";

export const exportarParaPdf = async (formData) => {
  try {
    const doc = new jsPDF();
    let y = 20;

    // Configurações iniciais
    doc.setFont("helvetica");
    doc.setFontSize(18);
    doc.text("Ficha Completa do Aluno", 105, y, { align: "center" });
    y += 15;

    // Processar cada seção
    Object.entries(formData).forEach(([secao, dados]) => {
      doc.setFontSize(14);
      doc.setTextColor(40, 53, 147);
      doc.text(
        secao.charAt(0).toUpperCase() +
          secao.slice(1).replace(/([A-Z])/g, " $1"),
        15,
        y
      );
      y += 10;

      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);

      Object.entries(dados).forEach(([chave, valor]) => {
        const texto = `${chave.replace(/_/g, " ")}: ${
          Array.isArray(valor) ? valor.join(", ") : valor || "-"
        }`;

        // Quebra de linha se texto muito longo
        const lines = doc.splitTextToSize(texto, 180);
        lines.forEach((line) => {
          if (y > 280) {
            doc.addPage();
            y = 20;
          }
          doc.text(line, 20, y);
          y += 7;
        });
      });
      y += 5;
    });

    // Adicionar rodapé
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Gerado em: ${new Date().toLocaleString()}`, 105, 285, {
      align: "center",
    });

    // Salvar PDF
    doc.save(`ficha_aluno_${new Date().toISOString().slice(0, 10)}.pdf`);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    alert("Ocorreu um erro ao gerar o PDF");
  }
};
