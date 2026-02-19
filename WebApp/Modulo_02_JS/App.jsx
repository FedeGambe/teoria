import { useState } from 'react'
import {somma, moltiplicazione} from './math'
import './App.css'

function App() {
  // Creazione di State per permettere all'utente di inserire i numeri 
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [risultato, setRisultato] = useState(null)

  const handleSomma = () => {setRisultato(somma(Number(num1), Number(num2)))}
  const handleMoltiplica = () => {setRisultato(moltiplicazione(Number(num1), (Number(num2))))}

  const risultatoSomma = somma(5, 7);       // 12
  const risultatoMoltiplica = moltiplicazione(3, 4); // 12

  return (
    <>
      <h1>Mini progetto React</h1>
      <h2>Statico</h2>
      <p>Somma 5 + 7 = {risultatoSomma}</p>
      <p>Moltiplica 3 × 4 = {risultatoMoltiplica}</p>
      <h2>Dinamico</h2>
      {/*Box*/} 
      <div className='card'>
        {/*Creiamo degli input, dove i num inseriti corrispondono alla variabile*/} 
        <input 
          type = "number"
          placeholder="Primo numero"
          value = {num1}
          onChange={(e) => setNum1(e.target.value)} /*Quando l'utente scrive qualcosa React la salva: e = evento, e.target = input, e.target.value = quello che l’utente ha scritto, setNum1(...) salva il valore dentro lo stato*/
          style={{marginRight: '10px', marginLeft: '10px'}}
        />
        <input 
          type = "number"
          placeholder="Secondo numero"
          value = {num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{marginRight: '10px', marginLeft: '10px'}}
        />

      </div>
      <div>
        <button onClick={handleSomma} style={{marginRight: '1px', marginLeft: '10px'}}>Somma</button>
        <button onClick={handleMoltiplica} style={{marginRight: '10px', marginLeft: '10px'}}>Moltiplica</button>
      </div>
      {risultato !== null && (
        <p style={{ marginTop: '15px' }}>Risultato: <strong>{risultato}</strong></p>
        )}
    </>
  )
}

export default App
