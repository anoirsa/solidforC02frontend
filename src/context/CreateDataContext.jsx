import React, {useReducer} from 'react'

export default (reducer, actions, initialState) => {
    const Context = React.createContext();
    
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState)
        let allData = {};
        for (let key in state) {
            allData[key] = state[key]
        }
        for (let key in actions) {
            allData[key] = actions[key](dispatch)
        }
        return <Context.Provider
            value={{...allData}}
        > {children}</Context.Provider>
    }

    return {Context, Provider}
}