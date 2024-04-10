import Swal from "sweetalert2";
import {ObtenerIdAuthSupabase, supabase} from "../index"

export const MostrarEmpresa = async (p) => {
    const {error, data} = await supabase.from("asignarempresa").select(`empresa(id,nombre,simbolomoneda)`).eq("id_usuario", p.idusaurio)
    .maybeSingle();
    if (data){
        return data;
    }
};


