import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="flex w-screen justify-around max-md:justify-between items-center h-28 ">
            <div className="flex flex-1 justify-center md:basis-3/5 md:pl-20 md:justify-start">
                <p className="text-white font-rubik-glitch text-3xl cursor-default max-lg:text-2xl">#HomofobiaÉCrime</p>
            </div>
            <div className="text-white flex gap-14 font-bebas-neue text-2xl basis-2/5 justify-center items-center text-nowrap hidden md:flex md:gap-8">
                <Link to='/'>INÍCIO</Link>
                <Link to='/pesquisa'>PESQUISA</Link>
                <Link to='https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos'><button className="py-2 px-5 bg-red-500 rounded hover:bg-red-600 ">DENUNCIA? DISQUE 100!</button></Link>
            </div>
        </div>
    )
}