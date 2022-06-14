import React, { useState } from "react";
import {createTarea} from '../service/TareaService'
import { TareaContext } from "../TareaContext";

function TareaCreate() {
    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState('');
    const {openModal,setOpenModal} = React.useContext(TareaContext);
    const [loading, setLoading] = useState(false);
    const onSubmit = (event) => {
        event.preventDefault();    
        
        setLoading(true)
        const objeto = {   
            tittle,
            description,
            hour
        }
        createTarea(objeto).then(
        
           setOpenModal(false)
           
        );
        setLoading(false);

    }
    const onCancel = () =>{
        setOpenModal(false)  

    }

    const onChange = (event) => {
        if (event.target.name === 'tittle')
            setTittle(event.target.value)

        if (event.target.name === 'description')
            setDescription(event.target.value)

        if (event.target.name === 'hour')
            setHour(event.target.value)

    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Titulo
                <input
                    name="tittle"
                    value={tittle}
                    onChange={onChange}
                />
            </label>

            <label>
                Descripcion
                <input
                    name="description"
                    value={description}
                    onChange={onChange}
                />
            </label>

            <label>
                Horas
                <input
                    name="hour"
                    value={hour}
                    onChange={onChange}
                />
            </label>


            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="submit">Save</button>
            { loading && <p>Guardando ...</p>}
        </form>
        
    );

}

export default TareaCreate