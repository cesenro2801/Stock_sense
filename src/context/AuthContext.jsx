import {createContext, useContext, useEffect, useState } from "react";

import { supabase } from "../index";

const AuthContext = createContext(); // contexto global

// exportar el contexto global para usarlo en otros componentes
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const {data:authListener} = supabase.auth.onAuthStateChange((event, session) => {
         // la funcion asincronica nos sirve en este caso para obtener los datos del usuario desde supabase y guardarlos en el estado user
         async(event, session) => {
            if(session?.user==null){
                setUser(null); // si no hay usuario, el estado user es null
            } else {
                setUser(session?.user) // guardamos los datos del usuario en el estado user
            }
         }
         return () => {
            authListener.unsubscribe();
        }
        })
},[])
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext);
}

