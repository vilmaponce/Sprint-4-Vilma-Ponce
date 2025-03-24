import { useState } from "react";
import { toast } from "react-toastify";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Eliminar espacios en blanco al inicio y al final
    const trimmedQuery = query.trim();
  
    // Validar que al menos uno de los campos (nombre o número) esté lleno
    if (!trimmedQuery && !count) {
      toast.error("Por favor, ingresa un nombre o un número para buscar.");
      return;
    }
  
    // Validar que el nombre contenga solo letras, espacios y comas (si se ingresa)
    if (trimmedQuery && !/^[a-zA-Z\s,]*$/.test(trimmedQuery)) {
      toast.error("Por favor, ingresa solo letras y comas en el nombre.");
      return;
    }
  
    // Validar que el número sea mayor que 0 (si se ingresa)
    if (count && (isNaN(count) || count <= 0)) {
      toast.error("Por favor, ingresa un número mayor que 0.");
      return;
    }
  
    // Pasar la consulta (sin espacios en blanco) y el conteo a la función de búsqueda
    onSearch(trimmedQuery, count);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700">
            Buscar personajes por nombre
          </label>
          <input
            type="text"
            id="query"
            placeholder="Ej: Rick, Morty, Summer"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
          />
        </div>
        <div>
          <label htmlFor="count" className="block text-sm font-medium text-gray-700">
            Cantidad de personajes a buscar (opcional)
          </label>
          <input
            type="number"
            id="count"
            placeholder="Ej: 5, 10, etc."
            value={count}
            onChange={(e) => {
              const value = e.target.value;
              // Evitar números negativos
              if (value === "" || (Number(value) > 0)) {
                setCount(value);
              }
            }}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchForm;