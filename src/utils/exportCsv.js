export const exportarParaCsv = (formData) => {
  // 1. Preparar dados formatados
  const dadosFormatados = {};

  // Processar cada seção do formulário
  Object.entries(formData).forEach(([secao, valores]) => {
    Object.entries(valores).forEach(([chave, valor]) => {
      // Tratar arrays (como documentos)
      const valorFormatado = Array.isArray(valor) ? valor.join(", ") : valor;
      dadosFormatados[`${secao}_${chave}`] = valorFormatado || "";
    });
  });

  // 2. Criar conteúdo CSV
  const cabecalho = Object.keys(dadosFormatados).join(";");
  const linhaDados = Object.values(dadosFormatados)
    .map((v) => `"${v?.toString().replace(/"/g, '""')}"`)
    .join(";");

  // 3. Gerar e baixar arquivo
  const conteudoCsv = `${cabecalho}\n${linhaDados}`;
  const blob = new Blob(["\uFEFF" + conteudoCsv], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `dados_aluno_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
