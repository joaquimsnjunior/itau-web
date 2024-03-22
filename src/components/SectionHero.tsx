import { Container } from "./Container";
import ImgAppleStore from '@/assets/btn-apple-store.svg'
import ImgGooglePlay from '@/assets/btn-google-play.svg'
import Arrow from '@/assets/arrow-explorer.svg'
import WomanImage from '@/assets/woman.png'
import Image from "next/image";


export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white text-7xl font-bold mb-4">Escolha inteligente. Escolha Itaú.</h1>
          <div className="flex gap-4 mb-24">
            <button>
              <Image 
                src={ImgAppleStore}
                alt="Apple Store"
              />
            </button>
            <button>
              <Image 
                src={ImgGooglePlay}
                alt="Google Play"
              />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="Arrow Down" />
            <span className="text-white text-sm font-bold">Continue navegando</span>
          </button>
        </div>
        <Image src={WomanImage} alt="Garota Propaganda" className="mr-[-41px]"/>
      </Container>
    </section>
  )
}