import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pesquisa } from "./pages/Pesquisa";
import { PesquisaFinalizada } from "./pages/PesquisaFinalizada";
import { Dados } from "./pages/Dados";


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
}, {
  path: '/estatistica',
  element: <Dados />
}
]);