import React, {useContext} from "react";


export default () => {
    const Context = React.createContext();
    const Provider = ({children}) => {
        return <Context.Provider
            value={5}
        > {children}</Context.Provider>
    }

    return {Context, Provider}
}