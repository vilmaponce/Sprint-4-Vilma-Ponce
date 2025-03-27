import { useState, useEffect } from "react";
import { fetchCharacters, fetchAllCharacters } from "../services/api";
import CharacterCard from "../components/CharacterCard";
import SearchForm from "../components/SearchForm";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";
import Loader from "../components/Loader";
import FavoritesModal from "../components/FavoritesModal";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handleSearch("");
    toast.success("👍😉 Personajes cargados correctamente");
  }, []);

  const handleSearch = async (query, count) => {
    setLoading(true);
    try {
      let results = [];

      if (query.trim() === "") {
        results = await fetchAllCharacters();
      } else {
        const names = query.split(",").map((name) => name.trim());
        const promises = names.map((name) => fetchCharacters(name));
        const data = await Promise.all(promises);
        results = data.flat();
      }

      const uniqueResults = Array.from(new Set(results.map((character) => character.id)))
        .map((id) => results.find((character) => character.id === id));

      if (uniqueResults.length === 0) {
        toast.error("😅 No se encontraron personajes con esos nombres.");
        setCharacters([]);
      } else {
        const limitedData = count > 0 ? uniqueResults.slice(0, parseInt(count, 10)) : uniqueResults;
        setCharacters(limitedData);
      }
    } catch (error) {
      toast.error("⚠️ Error al cargar personajes");
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFavorite = (character) => {
    const isFavorite = favorites.some((fav) => fav.id === character.id);
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
      setFavorites(updatedFavorites);
      toast.warn("🗑️ Personaje eliminado de favoritos");
    } else {
      const updatedFavorites = [...favorites, character];
      setFavorites(updatedFavorites);
      toast.success("❤️ Personaje agregado a favoritos");
    }
  };

  return (
    <div className="p-4">
      
      <h1 className="text-2xl font-bold mb-4">Buscador de Personajes</h1>
      <SearchForm onSearch={handleSearch} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
      >
        Ver favoritos ({favorites.length})
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onToggleFavorite={() => handleToggleFavorite(character)}
              isFavorite={favorites.some((fav) => fav.id === character.id)}
            />
          ))}
        </div>
      )}
      
      {isModalOpen && (
        <FavoritesModal
        favorites={favorites}
        onClose={() => setIsModalOpen(false)}
        onRemoveFavorite={(id) => {
          setFavorites(favorites.filter(fav => fav.id !== id));
          toast.warn("🗑️ Eliminado de favoritos");
        }}
        onRemoveAllFavorites={() => {
          setFavorites([]);
          toast.warn("🗑️ Todos los favoritos eliminados");
          setIsModalOpen(false);
        }}
      />
      )}
    </div>
  );
};

export default Home;
