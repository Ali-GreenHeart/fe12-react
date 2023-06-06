import { createContext } from "react"

let human = {
    ad: 'ali',
    age: 22,
}

export const DataContext = createContext({})

const DataContextComponent = ({ children }) => {
    return <DataContext.Provider value={human}>
        {children}
    </DataContext.Provider>
}
export default DataContextComponent;
