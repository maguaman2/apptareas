import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar (){

return (
    <ul>
        <li>
            <NavLink to="/tareas">
                Tareas
            </NavLink>
        </li>

    </ul>
);

}