import React, {
    createContext,
    useContext,
    useReducer
} from "react";

export const DataLayerContext = createContext();
//children is the one which gets wrapped inside the datalayer => App
export const DataLayer = ({ initialState, reducer, children }) => ( 
    <DataLayerContext.Provider value = { useReducer(reducer, initialState) } > { children } 
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);