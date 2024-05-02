import styled from "styled-components";
import { v } from "../../styles/variables";
import { CardDatosEmpresa } from "../molecules/CardDatosEmpresa";
import { useEmpresaStore } from "../../store/EmpresaStore";
export function BannerEmpresa(){
    const {dataempresa, contadorusuarios} = useEmpresaStore();
    return(<Container>
        <div className="content-wrapper-context">
            <span className="titulo">
                {<v.iconoempresa/>}
                {dataempresa.empresa?.nombre}
            </span>
            <div className="content-text">
                StockSense te mantiene siempre informado
            </div>
            <ContentCards>
                <CardDatosEmpresa titulo="Moneda" valor={dataempresa.empresa?.simbolomoneda} />
                <CardDatosEmpresa titulo="Usuarios" valor={contadorusuarios}/>
            </ContentCards>
        </div>
        
          
          
            
      
    </Container>);
}
const Container =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: o solid #6b6b6b;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat, repeat;
    border-radius: 14px;
    overflow: hidden;
    margin-top:10px;
    
`;
const ContentCards =styled.div`
    display: flex;
    gap: 10px;
    padding-top: 15px;
    cursor: pointer;
`;