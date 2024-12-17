async function getStrapiData(path: string) {
  const baseUrl = 'http://localhost:1337'

  try {
    const response = await fetch(baseUrl + path)
    return response.json()
  } catch(e) {
    console.error(e) 
  }
}

export default async function Home() { 
  const data = await getStrapiData('/api/home-page')
  const {title, description} = data.data

  return (
    <main className="container mx-auto py-6"> 
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
    </main>
  )
}
