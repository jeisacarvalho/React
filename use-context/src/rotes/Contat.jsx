import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";




function Contat() {

const {theme} = useContext(ThemeContext)

return (
    <div>
        <h1>Página de contato</h1>
        <p> O tema atual é {theme}</p>
    </div>
)
};
export default Contat