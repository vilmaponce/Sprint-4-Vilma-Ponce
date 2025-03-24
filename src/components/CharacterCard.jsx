// src/components/CharacterCard.jsx
import { FaHeart, FaTrash } from "react-icons/fa";

const CharacterCard = ({ character, onToggleFavorite, isFavorite }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-64">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{character.name}</h2>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Especie:</span> {character.species}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Ubicación:</span> {character.location.name}
        </p>
        <button
          onClick={() => onToggleFavorite(character)}
          className={`mt-4 w-full p-2 text-white rounded-md flex items-center justify-center gap-2 ${
            isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          } transition-colors`}
        >
          {isFavorite ? <FaTrash /> : <FaHeart />}
          {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;