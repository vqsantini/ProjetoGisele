import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Pesquisa } from "./Pesquisa";
import { PesquisaFinalizada } from "./PesquisaFinalizada";


export const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
},
{
  path: '/pesquisa',
  element: <Pesquisa />,
},{
  path: '/finalizada',
  element: <PesquisaFinalizada />
}
]);