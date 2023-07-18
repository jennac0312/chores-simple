import { useState, createContext } from "react";
import children from "../models/children";


// create context

export const AppContext = createContext()

// function to access context
const AppContextProvider = (props) => {
    // global state
    // const [state, setState] = useState('')
    const [complete, setComplete] = useState(false)

    // functions

    const toggleComplete = (who, chore) => {
        // search array of children find match
        // search array of chores find match. toggle complete
    }
    
    return (
    <AppContext.Provider value={{
        children,

        complete, setComplete, toggleComplete
        
        
    }}>
        {/* who state/context is passed to */}
        {props.children}
    </AppContext.Provider>
    )
}


export default AppContextProvider