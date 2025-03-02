import { getStrapiData } from '@/lib/data'
import { NewsCard } from '@/ui/cards'
import IycLogo from '@/ui/iyc-logo'
// import { Suspense } from 'react'
import { CardsSkeleton } from '@/ui/skeletons'

export default async function Home() {
  const data = await getStrapiData('/api/article')
  const news = data.data

//   const news = [
//     {
//       id: 1,
//       title: 'Clubtreffen im März',
//       text: 'Unser monatliches Clubtreffen im März findet am Sonntag, dem 09.03.2025 gegen 16 Uhr statt.\nSollten Fragen oder Ideen hierzu bestehen, dann können diese im internen Forenbereich hinterlegt werden. Zudem findet ihr dort alles zum Treffpunkt und was geplant ist. \n\nBitte denkt in jedem Fall an gute Laune!',
//       image: '',
//       datetime: '13.02.25 14:24 Uhr',
//       author: 'umbro',
//     },
//     {
//       id: 2,
//       title: 'ganjaman hat Geburtstag und wird 42',
//       text: `
// Hiermit gratulieren wir ganjaman im Namen des gesamten Clubs zum 42. Geburtstag.
// <br/>
// <br/>
// <br/> 
// Und weil Du heut Geburtstag hast,<br/>
// da haben wir gedacht,<br/>
// wir singen dir ein kleines Lied,<br/>
// weil dir das Freude macht.<br/>
// <br/> 
// <br/> 
// Und auch ein bunter Blumenstrauß<br/>
// ziert heute deinen Tisch.<br/>
// und wenn du ihn ins Wasser stellst,<br/>
// dann bleibt er lange frisch.<br/>
// <br/> 
// <br/> 
// Und wenn du einen Kuchen hast,<br/>
// so groß wie'n Mühlenstein<br/>
// und Schokolade auch dazu,<br/>
// dann lad uns alle ein.<br/>
// `,
//       image: '/happy.png',
//       datetime: '09.02.25 00:05 Uhr',
//       author: 'ganjaman',
//     },
//     {
//       id: 3,
//       title: 'umbro hat Geburtstag und wird 47',
//       text: `
// Hiermit gratulieren wir ganjaman im Namen des gesamten Clubs zum 42. Geburtstag.
// <br/>
// <br/>
// <br/> 
// Und weil Du heut Geburtstag hast,<br/>
// da haben wir gedacht,<br/>
// wir singen dir ein kleines Lied,<br/>
// weil dir das Freude macht.<br/>
// <br/> 
// <br/> 
// Und auch ein bunter Blumenstrauß<br/>
// ziert heute deinen Tisch.<br/>
// und wenn du ihn ins Wasser stellst,<br/>
// dann bleibt er lange frisch.<br/>
// <br/> 
// <br/> 
// Und wenn du einen Kuchen hast,<br/>
// so groß wie'n Mühlenstein<br/>
// und Schokolade auch dazu,<br/>
// dann lad uns alle ein.<br/>
// `,
//       image: '/happy.png',
//       datetime: '21.02.25 00:05 Uhr',
//       author: 'umbro',
//     }  
//   ] 

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex justify-center h-20 shrink-0 items-end rounded-lg bg-primary p-4 md:h-52">
        <IycLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-6">
          <CardsSkeleton />
          {news && news.map(item => (
            <NewsCard 
              key={`item-${item.id}`} 
              title={item.title} 
              text={item.text} 
              datetime={item.datetime}
              author={item.author}
              image={item.image}
            /> 
          ))}
        </div>
      </div>
    </main>
  )
}
