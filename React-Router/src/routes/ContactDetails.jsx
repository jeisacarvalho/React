import { useParams, useNavigate } from "react-router-dom"

function ContactDetails() {
    const {id} = useParams();

    //6- redirect
    const navigate = useNavigate();

    const handlecontact = () => {
        console.log("Contato enviado");
        return navigate("/");
    };

    return (
    <div>
        <h1>Exibindo mais informações do contato: {id}</h1>
        <button onClick={handlecontact} >Enviar mensagens</button>
    </div>
    )
}

export default ContactDetails