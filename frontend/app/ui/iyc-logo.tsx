import Image from 'next/image'

export default function IycLogo() {
  return (
    <Image
      src="/logo.png"
      width={200}
      height={200}
      alt="IYC Logo"
    />
  );
}
