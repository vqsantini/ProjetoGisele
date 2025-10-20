import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="flex w-screen justify-around items-center h-28 ">
            <div className="basis-3/5 flex justify-start pl-20 md:flex-1">
                <p className="text-white font-rubik-glitch text-3xl cursor-default ">#HomofobiaÉCrime</p>
            </div>
            <div className="text-white flex gap-14 font-bebas-neue text-2xl basis-2/5 justify-center items-center gap-14 text-nowrap hidden lg:flex">
                <Link to='/'>INÍCIO</Link>
                <Link to='/pesquisa'>PESQUISA</Link>
                <Link to='https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos'><button className="py-2 px-5 bg-red-500 rounded hover:bg-red-600 ">DENUNCIA? DISQUE 100!</button></Link>
            </div>
            <div className="flex md:hidden w-20 h-20 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </div>
        </div>
    )
}