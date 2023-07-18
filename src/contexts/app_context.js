import { useState, createContext, useEffect } from "react";
import children from "../models/children";


// create context

export const AppContext = createContext()

// function to access context
const AppContextProvider = (props) => {
    // global state
    // const [state, setState] = useState('')
    const [complete, setComplete] = useState(false)

    // functions

    let singleChore 

    const toggleComplete = (who, choreName) => {
        console.log(who)
        console.log(choreName)
        // search array of children find match
        // search array of chores find match. toggle complete
        let match = children.filter((child) => {
            return child.name === who
        })
        console.log( match[0] )
        singleChore = match[0].chores.filter((chore) => {
            return chore.task === choreName
        })
        console.log(singleChore[0])

        // toggle complete
        setComplete((prev) => !prev)
        singleChore[0].isComplete = complete
        // singleChore[0].isComplete = !singleChore[0].isComplete

        console.log(singleChore[0])
    }

    useEffect(() => {
        console.log('chore complete')

        return() => {
            console.log('cleaned up')
        }
    }, [complete])

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