import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <header className="bg-gray-800 text-white text-center py-6 flex flex-col justify-center items-center">
        <img src="src/img/wesker2.png" alt="Logo Wesker" className="w-auto h-72" />
        <p className="text-3xl font-extrabold mt-4">Un lugar para fans de Resident Evil</p>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Beneficios */}
        <section className="bg-gray-300 p-6 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Aquí encontrarás</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-bold text-lg">Contenido divertido y entretenido</h3>
              <p>Explora memes, videos y artículos que harán tu día más alegre.</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-bold text-lg">Una comunidad activa y amigable</h3>
              <p>Únete a debates, comparte tus ideas y haz nuevos amigos.</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-bold text-lg">Eventos y actividades para fans como tú</h3>
              <p>Participa en concursos, sorteos y encuentros exclusivos.</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-bold text-lg">Historias y fanfictions</h3>
              <p>Disfruta de narrativas creadas por fans para fans.</p>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="bg-gray-300 p-6 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Nuestra Historia</h2>
          <p className="mt-4 text-lg text-gray-700">
            La Taquería de Wesker nació en el año 2020, en medio de una pandemia global, de un grupo de amigos apasionados por Resident Evil. Lo que comenzó como un chiste local sobre los personajes del juego, se convirtió en una comunidad vibrante dedicada a compartir humor y diversión, ofreciendo un respiro en tiempos difíciles. Nuestro objetivo es proporcionar un espacio donde los fans puedan conectarse, reír y disfrutar de su amor por Resident Evil.
          </p>
        </section>

        {/* Llamada a la Acción */}
        <section className="text-center mt-10">
  <h2 className="text-4xl font-bold text-gray-200">¡Únete a Nuestra Comunidad!</h2>
  <div className="flex justify-center mt-4">
    <a 
      href="https://discord.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
    >
      <FontAwesomeIcon icon={faDiscord} size="lg" />
      <span>Únete a nuestro Discord</span>
    </a>
  </div>
</section>


        {/* Sección de Experiencias */}
        {/*
        <section className="bg-white p-6 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Lo que dicen nuestros usuarios</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-100 rounded shadow">
              <p>
                "Esta app ha transformado nuestra forma de vender." - Juan Pérez, Gerente de Ventas
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow">
              <p>
                "Aumentamos nuestras ventas en un 30% gracias a las recomendaciones personalizadas." - María García, Directora Comercial
              </p>
            </div>
          </div>
        </section>
        */}

        {/* Noticias y Actualizaciones */}
        <section className="bg-gray-300 p-6 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Noticias y Actualizaciones</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-bold text-lg">Nueva expansión de Resident Evil</h3>
              <p>¡Descubre las últimas novedades sobre el próximo lanzamiento!</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-bold text-lg">Evento de Halloween</h3>
              <p>Únete a nuestra celebración anual de Halloween con concursos y premios.</p>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="bg-gray-300 p-6 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Testimonios</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-100 rounded shadow">
              <p>"La comunidad más divertida y acogedora de fans de Resident Evil." - Ana López</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow">
              <p>"Un lugar perfecto para compartir mi pasión por Resident Evil." - Carlos Martínez</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;
