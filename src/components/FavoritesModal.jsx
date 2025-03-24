import { FaTimes } from "react-icons/fa"; // Importa un ícono para cerrar el modal


const FavoritesModal = ({ favorites, onClose, onRemoveFavorite }) => {
 
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Personajes Favoritos</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {favorites.map((character) => (
              <div
                key={character.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{character.name}</h3>
                  <p className="text-gray-600 mt-2">
                    <span className="font-semibold">Especie:</span> {character.species}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Ubicación:</span> {character.location.name}
                  </p>
                  <button
                    onClick={() => onRemoveFavorite(character.id)}
                    className="mt-4 w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    Eliminar de favoritos
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No hay favoritos guardados.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;