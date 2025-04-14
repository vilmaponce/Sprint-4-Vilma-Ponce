
import useLocalStorage from "../hooks/useLocalStorage";
import CharacterCard from "../components/CharacterCard";

const Favorites = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);//lee del localStorage y lo usa

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Personajes Favoritos</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onAddFavorite={() => handleRemoveFavorite(character.id)}
            />
          ))}
        </div>
      ) : (
        <p>No hay favoritos guardados.</p>
      )}
    </div>
  );
};

export default Favorites; 