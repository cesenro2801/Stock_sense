import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider, MyRoutes, Light, Dark } from "./index";
import { createContext, useState } from "react";
import {Device} from './styles/breackpoints';


export const ThemeContext = createContext(null);
function App() {
  const  [themeuse, setTheme] = useState('dark');
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <Container className={sidebarOpen}>
            <section className="ContentSidebar">
            Sidebar
            </section>
            <section className="ContentMenuambur">
            Menu hamburguesa
            </section>
            <section className="ContentRoutes">
              
            </section>

            <MyRoutes />
          </Container>
        </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.main`
  display: grid; // es para que los elementos hijos se comporten como grid
  grid-template-columns: 1fr; // es para que el grid tenga una sola columna
  background-color: ${({theme})=>theme.bgtotal}; // es para que el fondo sea el color de fondo del tema
  .ContentSidebar{
    display: none;
  }
  
  .ContentSidebar{
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet}{
    grid-template-columns: 65px 1fr; // es para que el grid tenga dos columnas

  }

`;

export default App
