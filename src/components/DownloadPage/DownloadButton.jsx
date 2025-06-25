import "../../styles/download.css";

function DownloadButton() {
  const apkLink = "https://expo.dev/artifacts/eas/vtEe1od8Q58xmpEDtgdVwt.apk";
  const fileName = "NovoHorizonteMatricula.apk";
  return (
    <a href={apkLink} className="download-btn" download={fileName}>
      Baixe o App Agora!
    </a>
  );
}

export default DownloadButton;
