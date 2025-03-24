import { BsFillLightningFill } from "react-icons/bs"; // Importar ícono de Bootstrap

const Header = () => {
    return (
        <header className="bg-blue-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center space-x-2">
                    <BsFillLightningFill className="text-yellow-300" /> {/* Ícono */}
                    <span>Api Rick & Morty</span>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="hover:text-blue-300 transition-colors">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/favorites" className="hover:text-blue-300 transition-colors">
                                Favoritos
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
