import React, {createContext, PropsWithChildren, useState} from "react";

interface AppStateValue {
    username: string,
    shoppingCart: {items: {id: number, name:string}[] },
    children?: React.ReactNode,
}

const defaultContextValue: AppStateValue = {
    username: '啊莱克斯',
    shoppingCart: { items: [] },
  }
  
export const appContext = createContext(defaultContextValue)
export const appSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
    const [state, setState] = useState(defaultContextValue)
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}