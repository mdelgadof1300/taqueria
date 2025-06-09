import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const events = [
    {
      title: "Marcha Zombie 2022",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
    {
      title: "Axo Matsuri 2023",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
    {
      title: "Toy Fest 2023",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
    {
      title: "Zombie Walk 2023",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
    {
      title: "Entrevistas",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
  ];

  const openModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <header className="bg-gray-800 text-white text-center py-6">
        <h1 className="text-4xl font-bold text-gray-300">Galería de Fotos</h1>
        <p className="text-xl mt-2">Explora nuestros mejores momentos</p>
      </header>

      <main className="max-w-7xl mx-auto p-6 bg-gray-800">
        {/* Introducción */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-300">Bienvenido a nuestra galería</h2>
          <p className="mt-4 text-lg text-gray-300">
            Sumérgete en los recuerdos y descubre las imágenes más destacadas de nuestros eventos y actividades. Cada foto cuenta una historia única.
          </p>
        </section>

        {/* Galería de Fotos */}
        <section className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="relative">
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                  {event.images.map((image, idx) => (
                    <div key={idx}>
                      <img
                        src={image}
                        alt={`Imagen ${idx + 1} del ${event.title}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openModal(image, event.title)} // Abrir modal al hacer clic
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 rounded-b-lg">
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal} // Cerrar modal al hacer clic fuera de la imagen
          >
            <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="mt-4 text-center text-lg font-semibold">
                {selectedTitle}
              </div>
              <button
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full px-2 py-1"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
