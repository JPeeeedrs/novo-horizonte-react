import jsPDF from "jspdf";

const exportStudentPdf = (student) => {
	const doc = new jsPDF();
	let y = 10;

	const checkPageEnd = () => {
		if (y >= 280) {
			doc.addPage();
			y = 10;
		}
	};

	doc.setFontSize(16);
	doc.text("Informações do Aluno", 10, y);
	y += 10;
	checkPageEnd();

	doc.setFontSize(12);
	doc.text(`Nome: ${student.nome || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(
		`Data de Nascimento: ${student.dataNascimento || "Não informado"}`,
		10,
		y
	);
	y += 10;
	checkPageEnd();
	doc.text(`Naturalidade: ${student.naturalidade || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Nacionalidade: ${student.nacionalidade || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Sexo: ${student.sexo || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`CPF: ${student.cpf || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`RG: ${student.rg || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Ano Letivo: ${student.anoLetivo || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Termo: ${student.termo || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Folha: ${student.folha || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Livro: ${student.livro || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Matrícula: ${student.matricula || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Turno: ${student.turno || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(
		`Tipo Sanguíneo: ${student.tipoSanguineo || "Não informado"}`,
		10,
		y
	);
	y += 10;
	checkPageEnd();
	doc.text(`Raça: ${student.raca || "Não informado"}`, 10, y);
	y += 20;
	checkPageEnd();

	doc.text("Informações da Mãe", 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Nome: ${student.nomeMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(
		`Data de Nascimento: ${student.nascimentoMae || "Não informado"}`,
		10,
		y
	);
	y += 10;
	checkPageEnd();
	doc.text(`Endereço: ${student.enderecoMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`CEP: ${student.cepMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`CPF: ${student.cpfMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`RG: ${student.rgMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Telefone: ${student.telefoneMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Email: ${student.emailMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Profissão: ${student.profissaoMae || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(
		`Local de Trabalho: ${student.trabalhoMae || "Não informado"}`,
		10,
		y
	);
	y += 10;
	checkPageEnd();
	doc.text(
		`Telefone do Trabalho: ${student.telefoneTrabalhoMae || "Não informado"}`,
		10,
		y
	);
	y += 20;
	checkPageEnd();

	doc.text("Informações do Pai", 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Nome: ${student.nomePai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(
		`Data de Nascimento: ${student.nascimentoPai || "Não informado"}`,
		10,
		y
	);
	y += 10;
	checkPageEnd();
	doc.text(`Endereço: ${student.enderecoPai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`CEP: ${student.cepPai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`CPF: ${student.cpfPai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`RG: ${student.rgPai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Telefone: ${student.telefonePai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Email: ${student.emailPai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Profissão: ${student.profissaoPai || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(
		`Local de Trabalho: ${student.trabalhoPai || "Não informado"}`,
		10,
		y
	);
	y += 10;
	checkPageEnd();
	doc.text(
		`Telefone do Trabalho: ${student.telefoneTrabalhoPai || "Não informado"}`,
		10,
		y
	);
	y += 20;
	checkPageEnd();

	doc.text("Observações", 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Escola: ${student.escola || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Irmaos: ${student.irmaosNome || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Especialista: ${student.especialista || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Alergia: ${student.alergia || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Medicamento: ${student.medicamento || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Reside: ${student.reside || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Responsavel: ${student.respNome || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(`Telefone: ${student.respTelefone || "Não informado"}`, 10, y);
	y += 10;
	checkPageEnd();
	doc.text(
		`Pessoas autorizadas: ${student.pessoasAutorizadas || "Não informado"}`,
		10,
		y
	);
	y += 10;
	checkPageEnd();

	doc.save(`${student.nome || "aluno"}.pdf`);
};

export default exportStudentPdf;
