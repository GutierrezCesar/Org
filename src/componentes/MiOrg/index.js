import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks
    // useState
    // useState()

    // const[nombrVariable, funcionActualiza] = useState(valorInicial)
    
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>

}

export default MiOrg