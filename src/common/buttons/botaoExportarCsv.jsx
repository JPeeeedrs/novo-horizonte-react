import exportStudentCsv from "../../utils/exportCsv";

function BotaoExportarCsv({ student }) {
	const handleExport = () => {
		if (student) {
			exportStudentCsv(student);
		} else {
			alert("Nenhum aluno selecionado para exportar.");
		}
	};

	return (
		<div>
			<button className='btn btn-primary' onClick={handleExport}>
				Exportar CSV
			</button>
		</div>
	);
}

export default BotaoExportarCsv;
