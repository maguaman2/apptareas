import { BrowserRouter, Route, Routes } from "react-router-dom";
import TareaPage from "./tarea/TareaPage";
import TareaCreate from "./tarea/TareaCreate";
import { TareaProvider } from "./TareaContext";
import Navbar from "./components/Navbar";


function App() {
  return (
 <TareaProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/tareas" element={<TareaPage />} />
        <Route path="/tareacreate" element={<TareaCreate />} />
                
        
      </Routes>
    </BrowserRouter> 
    </TareaProvider>

  );
}

export default App;
