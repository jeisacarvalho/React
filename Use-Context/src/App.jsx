import {Outlet} from "react-router-dom"

import "./App.css"

import Navbar from "./components/Navbar"

import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {

  const {theme} = useContext(ThemeContext);

  return (

  <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
    <h1>ola</h1>
    <Navbar/>
    <Outlet/>
  </div>

  )

}
export default App
