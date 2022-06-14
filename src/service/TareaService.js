const urlCrud = 'http://localhost:3001';

const getListTareas = async () => {
    const response = await fetch(`${urlCrud}/tarea/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createTarea = async (tarea) => {
    const resp = await fetch(`${urlCrud}/tarea/`, {
        method: 'POST',
        body: JSON.stringify(tarea),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListTareas, createTarea
}