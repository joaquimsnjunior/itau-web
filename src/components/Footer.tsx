import Image from "next/image";
import Logo from '@/assets/logo.png'
import XSocial from '@/assets/x.svg'


export function Footer() {
  return (
          <footer className="bg-white dark:bg-primary-orange">
              <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                  <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a className="flex items-center">
                            <Image 
                              src={Logo} 
                              alt="Logo" 
                            />
                        </a>
                        <span className="text-white font-bold">Banco Itaú</span>
                    </div> 
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-xl font-bold text-white">Nossos Produtos</h2>
                            <ul className="text-white font-semibold mb-4">
                                <li>
                                    <a href="/" className="hover:underline">Conta corrente</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Cartão de crédito</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Consórcio</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Seguros</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Investimentos</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Renegociação</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-bold text-white">Itaú</h2>
                            <ul className="text-white font-semibold mb-4">
                                <li>
                                    <a href="/" className="hover:underline">Relações com investidores</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Carreiras</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Impresa</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Sustenbilidade</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Integridade e Ética</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Ánalises econômicas</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Termo de uso</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Privacidade</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-bold text-white">Ajuda</h2>
                            <ul className="text-white font-semibold mb-4">
                                <li>
                                    <a href="#" className="hover:underline">Central de ajuda</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Canais Itaú</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Encontre agências</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Acessos não corremtista</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Consumidor.gov</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-bold text-white">Confira também</h2>
                            <ul className="text-white font-semibold mb-4">
                                <li>
                                    <a href="#" className="hover:underline">Para você</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Canais Itaú</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Para empresas</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Para poder público</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Pacotes e tarifas</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-bold text-white">Fale conosco</h2>
                            <ul className="text-white font-semibold mb-4">
                                <li>
                                    <a href="#" className="hover:underline">Sac 0800 728 0728</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Ouvidoria 0800 570 0011</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Denúncia</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Enviar mensagem</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white font-semibold sm:text-center dark:text-white">© 2024 <a href="/" className="hover:underline">Itaú Unibanco S.A</a>. CNPJ: 60.872.504/0001-23
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://facebook.com/itau" className="text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                              </svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://twitter.com/itau" className="ms-5">
                            <Image 
                              src={XSocial}
                              alt="X ex Twitter"
                              className="w-4 h-"
                            />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://github.com/joaquimsnjunior" className="text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub profile</span>
                        </a>
                    </div>
                </div>
              </div>
          </footer>
  )
}

