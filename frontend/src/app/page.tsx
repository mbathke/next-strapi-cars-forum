import { getStrapiData } from '@/lib/data'
import IycLogo from './ui/iyc-logo'

export default async function Home() {
  const data = await getStrapiData('/api/home-page')
  const { title, description } = data.data

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex justify-center h-20 shrink-0 items-end rounded-lg bg-primary p-4 md:h-52">
        <IycLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-primary px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-white md:text-3xl md:leading-normal`}>
            <strong>{title}</strong>
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add News Cards here */}
        </div>
      </div>
    </main>
  )
}
