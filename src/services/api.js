import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

// Función para obtener todos los personajes (paginados)
export const fetchAllCharacters = async () => {
  let allCharacters = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {// Mientras haya más páginas
    try {
      const response = await axios.get(`${API_URL}?page=${page}`);// Obtener la página actual
      allCharacters = allCharacters.concat(response.data.results);// Concatenar los resultados para obtener todos los personajes
      // Verificar si hay más páginas
      hasMore = response.data.info.next !== null; // Verificar si hay más páginas
      page++;
    } catch (error) {
      throw new Error("Error fetching all characters");
    }
  }

  return allCharacters;
};

// Función para buscar personajes por nombre (paginados)
export const fetchCharacters = async (name = "") => {// Nombre por defecto vacío
  try {
    const response = await axios.get(`${API_URL}?name=${name}`);// Obtener los personajes por nombre
    return response.data.results;
  } catch (error) {
    if (error.response && error.response.status === 404) {// Si no se encuentra el recurso
      return [];
    }
    throw new Error("Error fetching characters");
  }
};