const exportStudentCsv = (student) => {
	const fields = [
		["Nome", student.nome],
		["Data de Nascimento", student.dataNascimento],
		["Naturalidade", student.naturalidade],
		["Nacionalidade", student.nacionalidade],
		["Sexo", student.sexo],
		["CPF", student.cpf],
		["RG", student.rg],
		["Ano Letivo", student.anoLetivo],
		["Termo", student.termo],
		["Folha", student.folha],
		["Livro", student.livro],
		["Matrícula", student.matricula],
		["Turno", student.turno],
		["Tipo Sanguíneo", student.tipoSanguineo],
		["Raça", student.raca],
		["Nome da Mãe", student.nomeMae],
		["Data de Nascimento da Mãe", student.nascimentoMae],
		["Endereço da Mãe", student.enderecoMae],
		["CEP da Mãe", student.cepMae],
		["CPF da Mãe", student.cpfMae],
		["RG da Mãe", student.rgMae],
		["Telefone da Mãe", student.telefoneMae],
		["Email da Mãe", student.emailMae],
		["Profissão da Mãe", student.profissaoMae],
		["Trabalho da Mãe", student.trabalhoMae],
		["Telefone Trabalho Mãe", student.telefoneTrabalhoMae],
		["Nome do Pai", student.nomePai],
		["Data de Nascimento do Pai", student.nascimentoPai],
		["Endereço do Pai", student.enderecoPai],
		["CEP do Pai", student.cepPai],
		["CPF do Pai", student.cpfPai],
		["RG do Pai", student.rgPai],
		["Telefone do Pai", student.telefonePai],
		["Email do Pai", student.emailPai],
		["Profissão do Pai", student.profissaoPai],
		["Trabalho do Pai", student.trabalhoPai],
		["Telefone Trabalho Pai", student.telefoneTrabalhoPai],
		["Escola", student.escola],
		["Irmãos", student.irmaosNome],
		["Especialista", student.especialista],
		["Alergia", student.alergia],
		["Medicamento", student.medicamento],
		["Reside", student.reside],
		["Responsável", student.respNome],
		["Telefone do Responsável", student.respTelefone],
		["Pessoas Autorizadas", student.pessoasAutorizadas],
	];

	const rows = [["Campo", "Valor", "Campo", "Valor"]];
	for (let i = 0; i < fields.length; i += 2) {
		const [campo1, valor1] = fields[i];
		const [campo2, valor2] = fields[i + 1] || ["", ""]; // caso tenha número ímpar de campos
		rows.push([
			campo1,
			valor1 || "Não informado",
			campo2,
			valor2 || "Não informado",
		]);
	}

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
