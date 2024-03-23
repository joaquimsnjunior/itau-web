import Image from "next/image";
import Logo from '@/assets/logo.png'
import { Search } from "./Search";

export function Header() {
  return (
    <nav className="bg-white dark:bg-primary-orange fixed w-full z-20 top-0 start-0 border-b dark:border-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={Logo} className="gap-14" alt="Logo"/>
        </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-primary-orange bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-semibold rounded-lg text-sm px-4 py-2 text-center dark:bg-white dark:hover:bg-white dark:focus:white">Acesse sua conta</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-orange rounded-lg md:hidden hover:bg-primary-orange focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-primary-orange dark:focus:ring-primary-orange" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
        </button>
        </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-6 md:p-0 mt-4 font-bold md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white">Para você</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white">Para empresas</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white">Ajuda</a>
              </li>
            </ul>
            <div className="flex items-center justify-between ms-16">
              <Search/>
            </div>
          </div>
      </div>
    </nav>
  )
}