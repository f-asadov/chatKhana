import React from "react"
import { AppContext } from "./AppContext"

const Child2 = () =>{
    const contextData = React.useContext(AppContext)

    return(
        <>  
            <button onClick={contextData.changeTest} >{contextData.test} Кол-во</button>
        </>
    )
}

export default Child2