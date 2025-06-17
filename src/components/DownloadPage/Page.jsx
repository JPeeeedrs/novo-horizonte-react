import React from "react";
import "../../styles/download.css";
import DownloadButton from "./DownloadButton";

function Page() {
	return (
		<div className='text'>
			<h1>O Futuro Começa Aqui. Pré-Matrícula Digital Novo Horizonte.</h1>
			<p>
				Pensando em você e no futuro do seu filho, a Escola Novo Horizonte inova
				mais uma vez. Baixe nosso aplicativo e tenha acesso ao portal de
				pré-matrícula. Em poucos passos, você reserva a vaga do seu pequeno e
				fica por dentro de tudo que nossa escola oferece. Simples, rápido e
				seguro.
			</p>

			{/* 2. Crie o botão usando a classe CSS */}
			<DownloadButton />

			<ul>
				<li>
					Formulário de Pré-Matrícula: Garanta seu lugar sem sair de casa.
				</li>
				<li>
					Conheça a Escola: Explore nossa proposta pedagógica, fotos da
					estrutura e lista de atividades.
				</li>
				<li>
					Atualização Cadastral: Solicite aos administradores uma atualização de
					dados.
				</li>
			</ul>
		</div>
	);
}

export default Page;
