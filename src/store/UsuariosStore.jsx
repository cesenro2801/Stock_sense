import { create } from "zustand";

export const useUsuariosStore = create ((set, get)=>({
    insertarUsusarioAdmin: async (p)=> {
        await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,
        });
    }
}))