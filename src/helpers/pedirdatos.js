export const fetchSobreMi = async () => {
  const response = await fetch('https://localhost:7222/api/sobremi');
  if(!response.ok) {
    throw new Error('Error al obtener los datos');
  }
  return await response.json();
};