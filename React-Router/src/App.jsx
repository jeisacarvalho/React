// 2- Reaproveitamento de estrutura
import {Outlet} from "react-router-dom";

// 4- Navegando entre paginas
import Navbar from "./routes/components/Navbar";
function App() {

  return (

  <div>
    <Navbar/>
    <h1>React Router</h1>
    <Outlet />
    <p>Footer</p>
  </div>

  )

}
export default App
