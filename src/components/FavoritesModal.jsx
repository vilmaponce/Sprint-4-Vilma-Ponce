import { FaTimes, FaTrash, FaHeart } from "react-icons/fa";

const FavoritesModal = ({ favorites, onClose, onRemoveFavorite, onRemoveAllFavorites }) => {
  const handleRemoveAll = () => { //funcion interna para eliminar todos los favoritos
    // Confirmar si el usuario realmente quiere eliminar todos los favoritos
    if (favorites.length > 0 && window.confirm(`¿Estás seguro de eliminar ${favorites.length} favoritos?`)) {
      onRemoveAllFavorites();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaHeart className="text-red-500" />
            Mis Favoritos ({favorites.length})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Cerrar"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {favorites.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {favorites.map((character) => (
                <div
                  key={character.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{character.name}</h3>
                    <p className="text-m text-gray-600 mt-1">{character.species}</p>
                    <p className="text-m text-gray-500 mt-1">
                    <span className="font-semibold">Ubicación:</span> {character.location?.name || "Desconocida"}
                    </p>
                    <button
                      onClick={() => onRemoveFavorite(character.id)}
                      className="mt-3 w-full py-2 bg-red-500 text-white-600 rounded-md hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <FaTrash /> Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t">
              <button
                onClick={handleRemoveAll}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-yellow-900 text-white font-bold rounded-lg flex items-center justify-center gap-3
             animate-pulse hover:animate-none transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 active:scale-95
             group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-yellow-800 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <FaTrash className="text-lg" />
                Eliminar Todos los Favoritos
              </button>

            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No tienes favoritos guardados</p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Volver al Buscador
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;