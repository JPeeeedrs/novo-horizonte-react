import Footer from "../common/Footer";
import Header from "../common/Header";
import Download from "../components/DownloadPage/Page";

function DownloadApp() {
	return (
		<div className='Alunos d-flex flex-column min-vh-100'>
			<Header />

			<main>
				<Download />
			</main>

			<Footer />
		</div>
	);
}

export default DownloadApp;
