import Formulario from "./Formulario"
import Resultado from "./resultado"
import useClima from "../hooks/useClima"
function AppClima() {

  const {resultado} = useClima()
  return (
    <div>
        <main className="dos-columnas">
            <Formulario/>
            {resultado?.name && <Resultado/>}
        </main>
    </div>
  )
}

export default AppClima