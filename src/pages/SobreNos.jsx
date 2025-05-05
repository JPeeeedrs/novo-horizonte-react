import Sobre from "../components/Sobre/Sobre";
import Header from "../common/Header";
import Footer from "../common/Footer";

function SobreNos() {
	return (
		<div>
			<Header />
			<main className='mb-'>
				<Sobre />
			</main>
			<Footer />
		</div>
	);
}

export default SobreNos;
