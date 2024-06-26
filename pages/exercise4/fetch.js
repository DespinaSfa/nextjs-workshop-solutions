// Fetch data from the API route
export async function fetchData() {
  const response = await fetch('/data');
  const data = await response.json();
  return data;
}
