import { useState } from "react";
import "../styles/lgpdinfo.css";

import Header from "../common/Header";
import Footer from "../common/Footer";

const LgpdInfo = () => {
	const [solicitacao, setSolicitacao] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		if (!solicitacao.trim()) {
			alert("Campo obrigatório: Descreva a alteração solicitada");
			return;
		}

		if (window.confirm("Deseja enviar esta solicitação de alteração?")) {
			sendRequest();
		}
	};

	const sendRequest = async () => {
		setLoading(true);
		try {
			// Envio por email diretamente
			window.location.href =
				`mailto:vanessalimapsicopedagoga@bol.com.br?` +
				`subject=Solicitação de Alteração de Dados&` +
				`body=${encodeURIComponent(
					solicitacao + "\n\nEnviado via App Escola"
				)}`;

			alert("✅ Sucesso: Solicitação enviada com sucesso!");
		} catch {
			alert("Erro: Não foi possível enviar a solicitação");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<Header />
			<div className='container'>
				<div className='header-border'></div>
				<h1 className='title'>Solicitar Alterações</h1>
				<div className='card'>
					<div className='card-text'>
						Utilize este formulário para:
						<br />• Corrigir dados cadastrais
						<br />• Atualizar informações médicas
						<br />• Alterar contatos de emergência
						<br />• Solicitar exclusão de dados
					</div>
				</div>
				<label className='label'>Descreva a alteração necessária:</label>
				<textarea
					className='input'
					rows='5'
					placeholder='Ex: Atualizar número de telefone para (21) 98765-4321'
					value={solicitacao}
					onChange={(e) => setSolicitacao(e.target.value)}
				/>
				<button className='button' onClick={handleSubmit} disabled={loading}>
					{loading ? <span className='spinner'></span> : "Enviar Solicitação"}
				</button>
				<div className='lgpd-section'>
					<h2 className='lgpd-title'>Proteção de Dados (LGPD)</h2>
					<p className='lgpd-text'>
						Todas as informações coletadas são utilizadas exclusivamente para:
					</p>
					<div className='bullet-list'>
						<p>• Gestão acadêmica do aluno</p>
						<p>• Comunicação institucional</p>
						<p>• Emergências médicas</p>
						<p>• Cumprimento de obrigações legais</p>
					</div>
					<p className='lgpd-text'>
						Você tem direito a:
						<br />↳ Acesso aos seus dados
						<br />↳ Retificação de informações
						<br />↳ Exclusão dos dados (quando permitido por lei)
						<br />↳ Revogação de consentimento
					</p>
					<a
						href='https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd'
						target='_blank'
						rel='noopener noreferrer'
						className='link'
					>
						Leia mais sobre a Lei Geral de Proteção de Dados
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LgpdInfo;
