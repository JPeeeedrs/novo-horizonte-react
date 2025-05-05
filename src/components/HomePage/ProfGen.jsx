import profgen from "../../assets/images/profGenerica.jpg";

function ProfGen() {
	return (
		<section className='container-fluid my-5'>
			<div className='row align-items-center'>
				<div className='col-xl-6 p-4'>
					<h2 className='mb-4'>Nossa Missão</h2>
					<p className='mission-text'>
						A finalidade é proporcionar um ambiente motivador, para que as
						potencialidades de cada indivíduo sejam expressadas, adquirindo
						conhecimentos únicos e novas vivências de acordo com o dia a dia nas
						salas de aula.
					</p>
					<p className='mission-text'>
						Além disso, busca-se incentivar o desenvolvimento de habilidades
						socioemocionais, o pensamento crítico e a colaboração entre os
						alunos, fortalecendo o protagonismo estudantil e o senso de
						responsabilidade. A troca constante de experiências entre colegas e
						educadores contribui para a construção de uma comunidade de
						aprendizagem acolhedora, onde o respeito à diversidade e a
						valorização das diferenças enriquecem o processo educativo. Dessa
						forma, cada estudante é encorajado a explorar seus talentos,
						enfrentar desafios com autonomia e tornar-se agente ativo na
						construção do próprio conhecimento.
					</p>
				</div>

				<div className='col-xl-6 p-4'>
					<div className='mission-image-container'>
						<img src={profgen} className='img-fluid rounded' alt='Escola' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProfGen;
