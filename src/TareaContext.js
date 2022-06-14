import React, { useState } from "react";
const TareaContext = React.createContext();

function TareaProvider (props) {
    const [openModal , setOpenModal]=useState(false);
    return(
        <TareaContext.Provider value = {{
            openModal,setOpenModal
        }} >
            {props.children}
        </TareaContext.Provider>
    )
}

export{TareaContext, TareaProvider}