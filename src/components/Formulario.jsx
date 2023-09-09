import useClima from "../hooks/useClima"
import { useState } from "react"


function Formulario() {
    const [alerta, setAlerta] = useState()

    const {busqueda, datosBusqueda, consultarClima} = useClima()
    const {ciudad, pais} = busqueda
    const handleSubmit = e=>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
        setAlerta('Todos los campos son obligatorios')
        }
        consultarClima(busqueda)

        
    }
  return (

    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
        <form
        onSubmit={handleSubmit}
        >
            <div className="campo">
            <label htmlFor="ciudad">Ciudad</label>
            <input type="text" 
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
            />
            </div>
            <div className="campo">
            <label htmlFor="pais">Pais</label>
            <select name="pais" id="pais"
                        onChange={datosBusqueda}
                        value={pais}
            >
            <option value="">-- Seleccione un País --</option>
            <option value="US">Estados Unidos</option>
            <option value="AR">Argentina</option>
            <option value="MX">México</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
            <option value="CH">Chile</option>
            <option value="PE">Peru</option>
            </select>
            </div>

        <input type="submit" value='Consultar clima'/>
        </form>
        

    </div>
  )
}

export default Formulario