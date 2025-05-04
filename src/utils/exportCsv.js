const exportStudentCsv = (student) => {
	const rows = [
		["Informações do Aluno", ""],
		["Nome", student.nome || "Não informado"],
		["Data de Nascimento", student.dataNascimento || "Não informado"],
		["Naturalidade", student.naturalidade || "Não informado"],
		["Nacionalidade", student.nacionalidade || "Não informado"],
		["Sexo", student.sexo || "Não informado"],
		["CPF", student.cpf || "Não informado"],
		["RG", student.rg || "Não informado"],
		["Ano Letivo", student.anoLetivo || "Não informado"],
		["Termo", student.termo || "Não informado"],
		["Folha", student.folha || "Não informado"],
		["Livro", student.livro || "Não informado"],
		["Matrícula", student.matricula || "Não informado"],
		["Turno", student.turno || "Não informado"],
		["Tipo Sanguíneo", student.tipoSanguineo || "Não informado"],
		["Raça", student.raca || "Não informado"],
		["", ""],
		["Informações da Mãe", ""],
		["Nome", student.nomeMae || "Não informado"],
		["Data de Nascimento", student.nascimentoMae || "Não informado"],
		["Endereço", student.enderecoMae || "Não informado"],
		["CEP", student.cepMae || "Não informado"],
		["CPF", student.cpfMae || "Não informado"],
		["RG", student.rgMae || "Não informado"],
		["Telefone", student.telefoneMae || "Não informado"],
		["Email", student.emailMae || "Não informado"],
		["Profissão", student.profissaoMae || "Não informado"],
		["Local de Trabalho", student.trabalhoMae || "Não informado"],
		["Telefone do Trabalho", student.telefoneTrabalhoMae || "Não informado"],
		["", ""],
		["Informações do Pai", ""],
		["Nome", student.nomePai || "Não informado"],
		["Data de Nascimento", student.nascimentoPai || "Não informado"],
		["Endereço", student.enderecoPai || "Não informado"],
		["CEP", student.cepPai || "Não informado"],
		["CPF", student.cpfPai || "Não informado"],
		["RG", student.rgPai || "Não informado"],
		["Telefone", student.telefonePai || "Não informado"],
		["Email", student.emailPai || "Não informado"],
		["Profissão", student.profissaoPai || "Não informado"],
		["Local de Trabalho", student.trabalhoPai || "Não informado"],
		["Telefone do Trabalho", student.telefoneTrabalhoPai || "Não informado"],
		["", ""],
		["Observações", ""],
		["Escola", student.escola || "Não informado"],
		["Irmãos", student.irmaosNome || "Não informado"],
		["Especialista", student.especialista || "Não informado"],
		["Alergia", student.alergia || "Não informado"],
		["Medicamento", student.medicamento || "Não informado"],
		["Reside", student.reside || "Não informado"],
		["Responsável", student.respNome || "Não informado"],
		["Telefone do Responsável", student.respTelefone || "Não informado"],
		["Pessoas Autorizadas", student.pessoasAutorizadas || "Não informado"],
	];

	const csvContent =
		"data:text/csv;charset=utf-8," +
		rows.map((row) => row.join(",")).join("\n");

	const encodedUri = encodeURI(csvContent);
	const link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", `${student.nome || "aluno"}.csv`);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

export default exportStudentCsv;
