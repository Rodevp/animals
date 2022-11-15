export async function fetchPetsInfo() {
  const res = await fetch('http://localhost:8000/api/v1/puppy');
  const json = await res.json();
  return json;
}
