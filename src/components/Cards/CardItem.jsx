import React from "react";
import { useNavigate } from "react-router-dom";
import StudentCardActions from "./CardActions";
import BotaoExportarPdf from "../../common/buttons/BotaoExportarPdf";
import BotaoExportarCsv from "../../common/buttons/BotaoExportarCsv";

const StudentCardItem = ({ aluno, isOpen, toggleDropdown, deleteStudent }) => {
	const navigate = useNavigate();

	return (
		<div className={`student-card ${isOpen ? "open" : ""}`}>
			<div className='card-cabecalho'>
				<h2 className='card-title' title={aluno?.nome || "Nome não cadastrado"}>
					{aluno?.nome || "Nome não cadastrado"}
				</h2>

				<StudentCardActions
					alunoId={aluno?.id}
					isOpen={isOpen}
					onToggle={toggleDropdown}
					onEdit={(id) => navigate(`/editar/${id}`)}
					onDelete={deleteStudent}
				/>
			</div>

			{isOpen && (
				<div className='card-corpo'>
					<div className='info-item'>
						<strong>Sexo:</strong> {aluno?.sexo || "Não informado"}
					</div>
					<div className='info-item'>
						<strong>CPF:</strong> {aluno?.cpf || "Não informado"}
					</div>
					<div className='info-item'>
						<strong>RG:</strong> {aluno?.rg || "Não informado"}
					</div>
					<div className='info-item'>
						<strong>Ano Letivo:</strong> {aluno?.anoLetivo || "Não informado"}
					</div>
					<div className='info-item'>
						<strong>Turno:</strong> {aluno?.turno || "Não informado"}
					</div>
					<div className='info-item'>
						<strong>Tipo Sanguíneo:</strong>{" "}
						{aluno?.tipoSanguineo || "Não informado"}
					</div>

					{/* Responsável Materno */}
					<div className='section'>
						<h3 className='section-title'>Responsável Materno</h3>
						<div className='info-item'>
							<strong>Nome:</strong> {aluno?.nomeMae || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Endereço:</strong> {aluno?.enderecoMae || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Número da Casa:</strong>{" "}
							{aluno?.numeroCasaMae || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Telefone:</strong> {aluno?.telefoneMae || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Trabalho:</strong> {aluno?.trabalhoMae || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Telefone do Trabalho:</strong>{" "}
							{aluno?.telefoneTrabalhoMae || "Não informado"}
						</div>
					</div>

					{/* Responsável Paterno */}
					<div className='section'>
						<h3 className='section-title'>Responsável Paterno</h3>
						<div className='info-item'>
							<strong>Nome:</strong> {aluno?.nomePai || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Endereço:</strong> {aluno?.enderecoPai || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Número da Casa:</strong>{" "}
							{aluno?.numeroCasaPai || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Telefone:</strong> {aluno?.telefonePai || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Trabalho:</strong> {aluno?.trabalhoPai || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Telefone do Trabalho:</strong>{" "}
							{aluno?.telefoneTrabalhoPai || "Não informado"}
						</div>
					</div>

					{/* Observações */}
					<div className='section'>
						<h3 className='section-title'>Observações</h3>

						<h5 className='section-title sub-title'>Informações Médicas</h5>
						<div className='info-item'>
							<strong>Especialista:</strong>{" "}
							{aluno?.especialista || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Alergia:</strong> {aluno?.alergia || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Medicamento:</strong>{" "}
							{aluno?.medicamento || "Não informado"}
						</div>

						<h5 className='section-title sub-title'>Responsável Financeiro</h5>
						<div className='info-item'>
							<strong>Nome:</strong> {aluno?.respNome || "Não informado"}
						</div>
						<div className='info-item'>
							<strong>Telefone:</strong>{" "}
							{aluno?.respTelefone || "Não informado"}
						</div>

						<h5 className='section-title sub-title'>Pessoas Autorizadas</h5>
						<div className='info-item'>
							<strong>Pessoas:</strong>{" "}
							{aluno?.pessoasAutorizadas || "Nenhuma pessoa autorizada"}
						</div>
					</div>

					<div className='d-flex justify-around'>
						<BotaoExportarPdf student={aluno} />
						<BotaoExportarCsv student={aluno} />
					</div>
				</div>
			)}
		</div>
	);
};

export default StudentCardItem;
