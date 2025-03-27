

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esto hará que el scroll sea suave
    });
  };

  return (
    <footer id="footer" className="bg-blue-800 text-white p-4 mt-8 shadow-md">
      <div className="container mx-auto text-center">
        <p>© 2025 Buscador de Personajes. Todos los derechos reservados.</p>
        <p>
          Desarrollado con ❤️ por{" "}
          <a
            href="https://github.com/vilmaponce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200"
          >
            Vilma Ponce
          </a>
        </p>
        <nav>
          {/* Eliminar el <li> y usar un contenedor adecuado */}
          <button
            onClick={scrollToTop} // Llama a la función de scroll al inicio
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Inicio
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
