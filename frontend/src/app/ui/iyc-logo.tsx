import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image'

import logo from '@/app/logo.png'

export default function IycLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src={logo}
        width={200}
        height={200}
        alt="IYC Logo"
      />
    </div>
  );
}
