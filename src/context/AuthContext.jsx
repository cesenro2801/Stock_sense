import {createContext, useContext, useEffect, useState } from "react";

import { supabase } from "../index";

const AuthContext = createContext(); // contexto global

// exportar el contexto global para usarlo en otros componentes
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const {data:authListener} = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
        })
},[])
}

