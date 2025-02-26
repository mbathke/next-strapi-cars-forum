export async function getStrapiData(path: string) {
  const baseUrl = 'http://localhost:1337'

  try {
    const response = await fetch(baseUrl + path)
    return response.json()
  } catch(e) {
    console.error(e) 
  }
}


