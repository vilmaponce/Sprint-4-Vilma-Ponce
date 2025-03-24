// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white p-4 mt-8 shadow-md">
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
            </div>
        </footer>
    );
};

export default Footer;