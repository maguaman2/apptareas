function Tarea(props){
    return(
           <div>
            <p> <span>{props.itemTarea.id}</span>  <span> {props.itemTarea.titlle}</span> </p>            
            <p> {props.itemTarea.description} </p>
            <p> {props.itemTarea.hour} </p>
            </div>
    
    );

    
}
export default Tarea