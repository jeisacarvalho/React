import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
function Home() {
    const {theme, toggletheme} = usecontext{themecontext}
    return (
        <div>Home</div>
    )
}
export default Home