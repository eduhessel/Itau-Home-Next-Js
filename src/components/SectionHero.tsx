import Image from "next/image";

import { Container } from "./Container";

import ImgAppStore from "@/assets/btn-apple-store.svg"
import ImgGooglePlay from "@/assets/btn-google-play.svg"
import Arrow from "@/assets/arrow-explorer.svg"
import Woman from "@/assets/woman.png"

export function SectionHero() {
    return (
        <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-lg">
                    <h1 className="text-white text-7xl font-bold mb-8" aria-label="Tenha seu banco na palma da mão.">Tenha seu banco na palma da mão.</h1>
                    <p className="text-white text-xl max-w-md mb-8" aria-label="Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
                    <div className="flex gap-4 mb-24">
                        <button>
                            <Image src={ImgAppStore} alt="Imagem Apple Store" aria-label="Download via Apple Store"/>
                        </button>
                        <button>
                            <Image src={ImgGooglePlay} alt="Imagem Google Play" aria-label="Download via Google Play"/>
                        </button>
                    </div>
                    <button className="flex items-center gap-3">
                            <Image src={Arrow} alt="Arrow down" aria-label="Continue explorando"/>
                            <span className="text-white text-sm font-bold">Continue explorando</span>
                    </button>
                </div>
                
                <Image src={Woman} alt="Mulher segurando celular" className="mr-[-41px]"/>
            </Container>
        </section>
    )
}