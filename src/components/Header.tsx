import Image from "next/image";

import { ItemMenu } from "./ItemMenu"; /* Importação do componente Itens do menu */
import { Search } from "./Search"; /* Importação do componente Busca do menu */
import Logo from '@/assets/logo.svg'; /* Importação da logo */
import IconUser from '@/assets/icon-user.svg' /* Importação do ícone de usuário */
import { Container } from "./Container";

export function Header() {
    return (
        <header className="relative flex items-center w-full h-20 bg-primary-orange"> {/* Fundo Laranja */}
            <div className="absolute top-0 right-0 bg-primary-blue h-full w-[19%] z-0"></div> {/* Gambiarra do fundo Azul do Acessar conta */}
            <Container> {/* Definição de espaço disponível para os itens */}
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="Logo" aria-label="Logo"/>
                        <ul className="flex items-center gap-12">
                            <li tabIndex={1}>
                                <ItemMenu name="Para você"/> {/* Alteração via JS com a função do nome */}
                            </li>
                            <li>
                                <ItemMenu name="Para empresas"/> {/* Alteração via JS com a função do nome */}
                            </li>
                            <li>
                                <ItemMenu name="Serviços"/> {/* Alteração via JS com a função do nome */}
                            </li>
                            <li>
                                <ItemMenu name="Ajuda"/> {/* Alteração via JS com a função do nome */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
                <div>
                    <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10"> {/* Botão acessar conta */}
                        <Image className="z-10" src={IconUser} alt="Ícone acessar conta" aria-label="Acessar conta" /> {/* Ícone conta */}
                        <span className="text-white font-bold z-10">Acessar conta </span> {/* Texto acessar conta */}
                    </button>
                </div>
            </Container>
        </header>
    )
}