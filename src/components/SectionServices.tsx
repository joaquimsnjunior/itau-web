import Image from "next/image"
import { Container } from "./Container"
import ImagePhone from '@/assets/phone.png'


export function SectionServices() {
  return(
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Ao seu lado em cada momento da vida</span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Sempre tem uma solução do Itaú pra cuidar do que é valioso pra você.</h2>
          <p className="text-lg  max-w-[554px] mb-16">Vem ser cliente.</p>
        </div>
      </Container>
      <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
        <Image 
          src={ImagePhone}
          alt="App Celular"
        className="translate-x-[-50%]"/>
      </div>
    </section>
  )
}