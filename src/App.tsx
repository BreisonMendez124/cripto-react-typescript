import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"

function App() {
  const fecthCryptos = useCryptoStore( ( state ) => state.fetchCryptos )
  useEffect( ( ) => { 
    fecthCryptos()
  } , [ ])
  return (
    <div className="container">
        <h1 className="app-title">
          Cotizador de <span> Cruptomonedas</span>
        </h1>
        <div className="content">
            <CriptoSearchForm />
        </div>
    </div>
  )
}

export default App
