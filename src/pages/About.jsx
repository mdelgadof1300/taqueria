import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Irene Boyzo",
      position: "CEO & Fundadora",
      alias: "Ada La Mesera",
      description: "Lic. en Ciencias de la Comunicación y Artes Escénicas.",
      image: "src/img/ADAFIRMA2.png",
    },
    {
      name: "Maritza Salas",
      position: "CEO & Fundadora",
      alias: "Helena Insistente",
      description: "Lic. en Ciencias de la Comunicación.",
      image: "src/img/HELENAFIRMA2.png",
    },
    {
      name: "Tona Félix",
      position: "Fundadora",
      alias: "Rebecca desde la cocina",
      description: "Lic. Químico Farmacéutico Biológico.",
      image: "src/img/BECCA2taco.png",
    },
    {
      name: "Einar Torres",
      position: "Dirección de R.P",
      alias: "El tío Draven Wesker / Carlos el de la caja",
      description: "Lic. en Administración de Empresas de Entretenimiento y Comunicación.",
      image: "src/img/DRAVENFIRMA.png",
    },
    {
      name: "JC United 02",
      position: "Dirección de Networking",
      alias: "JCUnited02",
      description: "Lic. en Administración de Empresas Turísticas.",
      image: "src/img/JCFirma2.png",
    },
    {
      name: "Dania Sánchez",
      position: "Estrategia de vídeo comercial",
      alias: "Claire Mesera",
      description: "Lic. en Asistente Educativo.",
      image: "src/img/clAIREMESERA.png",
    },
    {
      name: "Jesús Aguilar",
      position: "Servicio y asistencia técnica",
      alias: "Hunk Cadenero",
      description: "Téc. en Electrónica.",
      image: "src/img/HUNKCADENERO2.png",
    },
    
    {
      name: "Aichanmidou",
      position: "Redactor creativo",
      alias: "Sherry La Edecán",
      description: "Lic. en Educación Primaria.",
      image: "src/img/SHERRYFIRMA2.png",
    },
    {
      name: "Alonso Fitta",
      position: "Diseñador Gráfico.",
      alias: "Frittos",
      description: "Lic. en Diseño Gráfico.",
      image: "src/img/FRITTANGASREGENERADOR2.png",
    },
    {
      name: "Alan Salas",
      position: "Estrategia de Fotografía.",
      alias: "Chris Gerente.",
      description: "Asesor del INE.",
      image: "src/img/CHRISFIRMA2.png",
    },
    {
      name: "José Francisco",
      position: "Inversor Mayoritario",
      alias: "Jfco. Pudiente",
      description: "Lic. en Contaduría Pública.",
      image: "src/img/carlosfirma2.png",
    },
    {
      name: "Nancy Lugo",
      position: "Redactora",
      alias: "Nemesio Botarga",
      description: "Lic. en Cirujano Dentista.",
      image: "src/img/NEMESIOBOTARGA2.png",
    },
    
    
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      <header className="bg-gray-800 text-center py-6">
        <h1 className="text-4xl font-bold text-gray-200">Acerca de Nosotros</h1>
        <p className="text-xl mt-2 text-gray-200">Conoce más sobre nuestra misión y nuestro equipo</p>
      </header>

      <main className="max-w-7xl mx-auto p-6 bg-gray-900">
        {/* Misión */}
        <section className="mt-2">
          <h2 className="text-2xl font-bold text-white text-center">Nuestra Misión</h2>
          <p className="mt-4 text-lg text-white">
            En la Taquería de Wesker, nos dedicamos a unir y entretener a los fans de Resident Evil y la cultura geek a través del humor, la creatividad y la comunidad. Nacidos de la pasión compartida por un grupo de amigos, buscamos transformar momentos difíciles en sonrisas, brindando contenido divertido y relevante que refleje nuestra devoción por los videojuegos y la conexión humana. Nuestro objetivo es crear un espacio donde todos, sin importar las circunstancias, puedan encontrar un respiro, compartir su amor por Resident Evil, y sentirse parte de una comunidad que valora la amistad y la diversión.
          </p>
        </section>

        {/* Historia */}
        <section className="bg-gray-200 p-6 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Nuestra Historia</h2>
          <p className="mt-4 text-lg">
            La Taquería de Wesker tiene sus raíces en la pasión compartida por un grupo de amigos por los videojuegos de Resident Evil. Desde su juventud, estos amigos disfrutaban jugando, consumiendo contenido relacionado y creando sus propias historias de fanfiction.
            El 2020 trajo consigo la pandemia, haciendo que sus encuentros se volvieran completamente virtuales. A pesar de las dificultades, encontraron consuelo y tiempo libre extra en medio de la nueva realidad. Esta situación les llevó a consumir más contenido en redes sociales y a compartir sus bromas y teorías sobre los personajes de Resident Evil, como si fueran personajes de la vida real, haciendo sátira de situaciones actuales.
            Así nació la Taquería de Wesker, inicialmente como una broma entre amigos. Planteaban situaciones hipotéticas y divertidas sobre los personajes de la saga. Sin embargo, con el tiempo, el proyecto se convirtió en un esfuerzo por llevar un poco de humor y alegría a otros durante los tiempos difíciles de la pandemia.
            Lo que comenzó como un chiste local se transformó en una comunidad en línea que ofrecía entretenimiento, productos y una dosis de humor. La Taquería de Wesker siempre ha sido impulsada por el deseo de este grupo de amigos de compartir su pasión y brindar alegría a otros que comparten el mismo interés. Hoy, continúan uniendo a personas con su amor por Resident Evil, manteniendo vivo el espíritu de camaradería y diversión.
          </p>
        </section>

        {/* Equipo */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center text-gray-300">Nuestro Equipo</h2>
          {/* Carrusel en vista móvil */}
          <div className="block md:hidden mt-4">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-4 shadow rounded text-center">
                  <div className="flex justify-center">
                    <img
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mt-4">{member.name}</h3>
                  <p>{member.position}</p>
                  <p>{member.alias}</p>
                  <p className="text-gray-600 mt-2">{member.description}</p>
                </div>
              ))}
            </Carousel>
          </div>
          {/* Grilla en tablet y versiones más grandes */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-4 shadow rounded text-center">
                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mt-4">{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.alias}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
};

export default About;
