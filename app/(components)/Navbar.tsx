import Image from 'next/image'
import GreenWooviLogo from '../../public/static/images/icons/svgexport-1.svg'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className="flex bg-woovi-green p-2">
        <div className="flex items-center">
          <Image 
            src={GreenWooviLogo} 
            className="ml-16"
            alt="Woovi Logo" 
            width={120} 
            height={60}
            priority />
        </div>
            
        <ul className="flex text-sm text-white font-bold justify-end items-center m-auto mr-24 space-x-6">
          <Link href="/">Para seu negócio</Link>
          <Link href="/">Para você</Link>
          <Link href="/">Planos</Link>
          <Link href="/">Falar com vendas</Link>
          <Link href="/">Login</Link>
          <Link href="/register" className="border rounded-3xl py-1 px-10">Cadastre-se</Link>
        </ul>
      </nav>
    </>
  )
}