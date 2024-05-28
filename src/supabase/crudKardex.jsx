import {supabase} from "../index"
import Swal from "sweetalert2";

export async function InsertarKardex(p) {
    const {error} = await supabase.from("kardex").insert(p)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
            footer: '<a href="">Agregue una nueva descripción</a>',
        });
    } 

export async function MostrarKardex(p){
    const {data} = await supabase.rpc("mostrarkardexempresa",p).order("id", {ascending:false});
    return data;    
}

export async function EliminarKardex(p){
    const { error } = await supabase
        .from("kardex")
        .delete()
        .eq("id", p.id);
    if (error){
        alert("Error al eliminar", error.message);
    }
}

export async function EditarKardex(p){
    const { error } = await supabase
        .from("kardex")
        .update(p)
        .eq("id", p.id);
    if (error) {
        alert("Error al editar", error.message);
    }
}

export async function BuscarKardex(p) {
    const { data } = await supabase
        .from("kardex")
        .select()
        .eq("id_empresa", p.id_empresa)
        .ilike("descripcion", "%" + p.descripcion + "%")
        return data;
}