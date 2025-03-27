// src/components/Header.jsx
import { Link } from "react-router-dom";
import { BsFillLightningFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa"; // Icono de la flecha

const Header = ({ onFavoritesClick }) => { // Recibe la función como prop
  return (
    <header className="bg-blue-800 text-white p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2 hover:text-blue-300 transition-colors">
          <BsFillLightningFill className="text-yellow-300" />
          <span>Api Rick & Morty</span>
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-300 transition-colors">
                Inicio
              </Link>
            </li>
            <li
              onClick={onFavoritesClick} // Aquí ejecutamos la función al hacer clic
              className="cursor-pointer"
            >
              {/* Icono de flecha hacia abajo */}
              <FaArrowDown className="text-2xl hover:text-blue-300 transition-colors" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
