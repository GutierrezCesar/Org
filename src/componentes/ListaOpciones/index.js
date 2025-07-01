import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map( (equipo, index) => {
    //  return <option></option>
    // } )
    const Equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseno",
        "Movil",
        "Innovacion y Gestion"
    ]

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { Equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
}

export default ListaOpciones