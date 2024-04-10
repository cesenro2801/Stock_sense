
import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useEmpresaStore } from "../index";

const Home = () => {
    const {contarusuariosXempresa, dataempresa} =useEmpresaStore();
    const {data} = useQuery({queryKey:["contar usuarios por empresa",{idempresa:dataempresa.empresa?.id}],queryFn:()=>contarusuariosXempresa({id_empresa:dataempresa.empresa?.id}),enabled:!!dataempresa})
    return (<HomeTemplate />)
}

export default Home;
