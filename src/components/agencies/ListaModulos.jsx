import styled from "styled-components";
import { useUsuariosStore } from "../../store/UsuariosStore";
import { useEffect } from "react";
export function ListaModulos({checkboxs, setCheckboxs, accion}){
        const{datamodulos}= useUsuariosStore();
        useEffect(()=>{
            if(accion== "Editar"){

            }
            else{
                setCheckboxs(datamodulos)
            }
        }, [])
    return (<Container>
        {
         checkboxs?.map((item, index)=>{
            return(<div>
                
            </div>)
         })
        }
    </Container>)
}
const Container  =styled.div`
    
`