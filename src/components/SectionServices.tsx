import Image from "next/image";

import { Container } from "./Container";

import PhoneIcon from "@/assets/icon-phone.svg"
import SoluctionsIcon from "@/assets/icon-solutions.svg"
import OptionsIcon from "@/assets/icon-options.svg"
import CardIcon from "@/assets/icon-card.svg"

import ImagePhone from "@/assets/phone.png"

export function SectionServices () {
    return (
        <section className="relative w-full h-[965px]">
            <Container>
                <div className="flex-1 pt-32 max-w-2xl">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">SERVIÇOS EXCLUSIVOS</span>
                    <h2 className="text-primary-gray text-6xl font-bold mb-6">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-second-gray text-lg max-w-lg mb-16">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>
                    <ul className="flex flex-col item-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center"> {/* Máscara para os ícones ficarem do mesmo tamanho */}
                                <Image src={PhoneIcon} alt="Ícone Celular"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2" aria-label="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver.">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver.</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center"> {/* Máscara para os ícones ficarem do mesmo tamanho */}
                                <Image src={SoluctionsIcon} alt="Ícone Soluções"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2" aria-label="Soluções de empréstimos e renegociação para organizar suas finanças.">Soluções de empréstimos e renegociação para organizar suas finanças.</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center"> {/* Máscara para os ícones ficarem do mesmo tamanho */}
                                <Image src={OptionsIcon} alt="Ícone Opções"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2" aria-label="Diversas opções de investimentos, de acordo com o seu perfil de investidor.">Diversas opções de investimentos, de acordo com o seu perfil de investidor.</p>
                        </li>
                        <li className="flex items-center gap-9">
                            <div className="w-7 h-7 flex items-center justify-center"> {/* Máscara para os ícones ficarem do mesmo tamanho */}
                                <Image src={CardIcon} alt="Ícone Cartão"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2" aria-label="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
                <Image src={ImagePhone} alt="Imagem do app Itaú" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}