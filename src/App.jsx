import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider, MyRoutes, Light, Dark } from "./index";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);

function App() {
  const  [themeuse, setTheme] = useState('dark');
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <Container>
            <section className="ContentSidebar">
            Sidebar
            </section>
            <section className="ContentMenuambur">
              
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
`;

export default App
