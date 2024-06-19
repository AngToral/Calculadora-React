import { useState } from 'react';
import "./Calc.css";
import Button from "./Components/Button";

function App() {

  const [screen, setScreen] = useState(""); // Pantalla
  const [prev, setPrev] = useState(""); // Número anterior
  const [oper, setOper] = useState(""); // Operador

  function handleClick(e) {
    const key = e.target.innerText // Texto del botón
    const type = e.target.dataset.type // Tipo del botón

    switch(type) { // recoge los tipos
      case "numero": // si es número
        if (screen.includes(".") && key === ".") return // Si la pantalla incluye punto, no hacer nada
        if (screen == "" && key === "0") return // Si la pantalla está vacía y presiona el cero, no hacer nada
        if (screen === "Error") return // Si la pantalla dice error, no hacer nada
        else (
        setScreen(screen+key)) // Para todo lo demás, concatenar las teclas en pantalla
        break;

      case "operador": // si es un operador
        if (key == "%") { // Si el operador clicado es porcentaje
          setScreen((parseFloat(screen) / 100)) // En la pantalla saldrá: pantalla entre 100
          setPrev((parseFloat(screen) / 100)) // En el prev se guarada: pantalla entre 100
          setOper("") // Oper se resetea
        } 
        if (oper === "+" && screen !== "") { // Si la pantalla no está vacía, y el operador es más
          setScreen("") // Resetea pantalla
          setOper(key) // En oper se guarda el botón
          setPrev((parseFloat(prev) + parseFloat(screen)).toString()) // En prev se guarda número prev más número pantalla, y lo vuelve en string
        }
        if (oper === "-" && screen !== "") { // Si la pantalla no está vacía, y el operador es menos
          setScreen("") // Resetea pantalla
          setOper(key) // En oper se guarda el botón
          setPrev((parseFloat(prev) - parseFloat(screen)).toString()) // En prev se guarda número prev menos número pantalla, y lo vuelve en string
        }
        if (oper === "x" && screen !== "") { // Si la pantalla no está vacía, y el operador es por
          setScreen("") // Resetea pantalla
          setOper(key) // En oper se guarda el botón
          setPrev((parseFloat(prev) * parseFloat(screen)).toString()) // En prev se guarda número prev multiplicado por número pantalla, y lo vuelve en string
        }
        if (oper === "÷" && screen !== "") { // Si la pantalla no está vacía, y el operador es división
          setScreen("") // Resetea pantalla
          setOper(key) // En oper se guarda el botón
          setPrev((parseFloat(prev) / parseFloat(screen)).toString()) // En prev se guarda número prev entre número pantalla, y lo vuelve en string
        }
        if (oper === "" && key !== "%") { // Si oper está vacío, y la tecla no es porcentaje
        setPrev(screen) // En prev guarda pantalla
        setOper(key) // En oper se guarda el botón
        setScreen("") // Resetea pantalla
        }
        if (screen === "" && prev === "" || screen == "Error") { // Si la pantalla está vacía y prev está vacío, o en la pantalla sale error
          setScreen("Error") // La pantalla muestra error
        }
        break;

      case "AC": //Si el boton es ac
        setScreen("") // Resetea pantalla
        setOper("") // Resetea oper
        setPrev("") // Resetea prev
        break;

      case "DEL": // Si el botón es del
        setScreen(screen.slice(0,-1)) // Se corta la pantalla el último numero
        break;
    }
}

const operaciones = () => {

  switch(oper) { // recoge las oper
      case "+": // si es más
          setScreen((parseFloat(prev) + parseFloat(screen)).toString()) // en la pantalla muestra número prev más número pantalla, y lo vuelve en string
          setOper("") // Resetea oper
          setPrev((parseFloat(prev) + parseFloat(screen)).toString()) // en prev guarda número prev más número pantalla, y lo vuelve en string
          break;
      
      case "-": // si es menos
        setScreen((parseFloat(prev) - parseFloat(screen)).toString()) // en la pantalla muestra número prev menos número pantalla, y lo vuelve en string
        setOper("") // Resetea oper
        setPrev((parseFloat(prev) - parseFloat(screen)).toString()) // en prev guarda número prev más número pantalla, y lo vuelve en string
        break;

      case "x": // si es equis
        setScreen((parseFloat(prev) * parseFloat(screen)).toString()) // en la pantalla muestra número prev multiplicado por número pantalla, y lo vuelve en string
        setOper("") // Resetea oper
        setPrev((parseFloat(prev) * parseFloat(screen)).toString()) // en prev guarda número prev multiplicado por número pantalla, y lo vuelve en string
        break;

      case "÷": // si es división
        setScreen((parseFloat(prev) / parseFloat(screen)).toString()) // en la pantalla muestra número prev entre número pantalla, y lo vuelve en string
        setOper("") // Resetea oper
        setPrev((parseFloat(prev) / parseFloat(screen)).toString()) // en prev guarda número prev entre número pantalla, y lo vuelve en string
        break;
  }
}

  return (
    <div className="contenedor">
      <input type="text" value={screen} disabled/>
      <Button label="AC" onClick={handleClick} type="AC" className="boton AC"></Button>
      <Button label="&larr;" onClick={handleClick} type="DEL" className="boton del"></Button>
      <Button label="%" onClick={handleClick} type="operador" className="boton"></Button>
      <Button label="÷" onClick={handleClick} type="operador" className="boton operador"></Button>
      <Button label="7" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="8" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="9" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="x" onClick={handleClick} type="operador" className="boton operador"></Button>
      <Button label="4" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="5" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="6" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="-" onClick={handleClick} type="operador" className="boton operador"></Button>
      <Button label="1" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="2" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="3" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="+" onClick={handleClick} type="operador" className="boton operador"></Button>
      <Button label="0" onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="." onClick={handleClick} type="numero" className="boton"></Button>
      <Button label="=" onClick={operaciones} type="igual" className="boton igual" ></Button>
      <div>
        {/* <p>Prev: {prev}</p>
        <p>Oper: {oper}</p>
        <p>Tipo: {typeof(screen)}</p> */}
      </div>
    </div>
  )
}

export default App

// Problemas:
// Que la pantalla se limpie cuando empiezo a escribir el 2do número y no cuando escribo el operador
// Al unir varias operaciones, no puedo mostrar el resultado actual
// No me funciona el word-wrap