import React, { createContext } from 'react';

// Definir como luce la información
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}


// Definir el estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};


// Estructura de la información del context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}


// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);


// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => { },
        }}>
            {children}
        </AuthContext.Provider>
    );
};
