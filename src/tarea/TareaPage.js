import React, { useState, useEffect } from "react";
import TareaList from './TareaList';
import Tarea from './Tarea'
import { Modal } from '../Modal/index'
import { getListTareas } from '../service/TareaService'
import { TareaContext } from "../TareaContext";

import TareaCreate from "./TareaCreate";

function TareaPage() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [tareas, setTareas] = useState([]);

  const { openModal, setOpenModal } = React.useContext(TareaContext);


  useEffect(() => {
    getListTareas().then(data => {
      setTareas(data);
      setLoading(false);
    }
    );
  }, [openModal]);

  const onClick = () => {
    setOpenModal(true)
  }
  return (
    <div>
      <h2>Lista de Tarea</h2>
      <button onClick={onClick}>Nuevo</button>

      <TareaList>
        {loading && <p>Cargando ...</p>}
        {
          tareas.map(item =>
            <Tarea
              key={item.id}
              itemTarea={item} />
          )
        }
      </TareaList>
      {!!openModal &&
        (
          <Modal>
            <TareaCreate />
          </Modal>
        )
      }



    </div>
  );
}

export default TareaPage;