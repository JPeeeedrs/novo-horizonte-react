function Map() {
  return (
    <section className="container-fluid mb-5">
      <div className="container mb-4">
        <h2 id="map-title" className="text-center">
          Nossa Localização
        </h2>
        <p id="map-address" className="text-center">
          R. Amapá, 55 - Araras, Teresópolis - RJ, 25958-030
        </p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6441737439946!2d-42.97891562414794!3d-22.56466092895831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990950d098b55f%3A0x5b49336bd1a24!2sR.%20Amap%C3%A1%2C%2055%20-%20Araras%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025958-030!5e0!3m2!1sen!2sbr!4v1709595849157!5m2!1sen!2sbr"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
