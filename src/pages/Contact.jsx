import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    if (!formData.asunto) {
      newErrors.asunto = "El asunto es obligatorio";
    }
    if (!formData.mensaje) {
      newErrors.mensaje = "El mensaje es obligatorio";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Datos enviados:", formData);
      setErrors({});
      alert("Mensaje enviado correctamente");
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <header className="bg-gray-800 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Contáctanos</h1>
        <p className="text-xl mt-2">Nos encantaría saber de ti</p>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Formulario de contacto */}
        <section className="mt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Envíanos un mensaje</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Tu correo electrónico"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Asunto del mensaje"
                />
                {errors.asunto && (
                  <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Escribe tu mensaje aquí"
                  rows="5"
                ></textarea>
                {errors.mensaje && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded-md focus:outline-none focus:ring focus:border-green-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Información de contacto */}
        <section className="mt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
            <p className="text-lg">
              Si prefieres contactarnos directamente, aquí tienes nuestra
              información de contacto:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-lg">
                <strong >Correo electrónico:</strong> <a href="mailto:lataqueriadeweskeroficial@gmail.com" className="text-blue-500">lataqueriadeweskeroficial@gmail.com</a>
              </p>
              <p className="text-lg">
                <strong>Dirección:</strong> Raccoon City.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
