import styled from "styled-components"
import { v } from "../../styles/variables";
export function Selector({ color, state, funcion, texto1, texto2 }) {
    return (
    <Container $color={color} onClick={funcion}>
        <div>
            <span>{texto1}</span>
            <span>{texto2}</span>
        </div>
        <span className={state?"open":"close"}>{v.iconoFlechabajo}</span>
    </Container>
    );
}
const Container =styled.div`
`