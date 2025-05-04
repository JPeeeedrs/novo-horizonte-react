import exportStudentPdf from "../../utils/exportPdf";

function BotaoExportarPdf({ student }) {
	const handleExport = () => {
		if (student) {
			exportStudentPdf(student);
		} else {
			alert("Nenhum aluno selecionado para exportar.");
		}
	};

	return (
		<div>
			<button className='btn btn-danger' onClick={handleExport}>
				Exportar PDF
			</button>
		</div>
	);
}

export default BotaoExportarPdf;
