import { Link } from "react-router-dom";

export const Header = ({map}: {map: string}) => {
    return (
        <div className="flex w-screen justify-around max-md:justify-between items-center h-28 ">
            <div className="flex flex-1 justify-center md:basis-3/5 md:pl-20 md:justify-start">
                <Link to="/" className="text-white font-rubik-glitch text-3xl cursor-pointer max-lg:text-2xl">#HomofobiaÉCrime</Link>
            </div>
            <div className="text-white flex gap-14 font-bebas-neue text-2xl basis-2/5 justify-center items-center text-nowrap hidden md:flex md:gap-16">
                <Link to='/' className={`${map === "home" ? "map-active" : ""}`}>INÍCIO</Link>
                <Link to='/pesquisa' className={`${map === "search" ? "map-active" : ""}`}>PESQUISA</Link>
                <Link to='/estatistica' className={`${map === "statistic" ? "map-active" : ""}`}>Estatística</Link>
                <Link to='https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos'><button className="py-2 px-5 bg-red-500 rounded hover:bg-red-600 ">DENUNCIA? DISQUE 100!</button></Link>
            </div>
        </div>
    )
}