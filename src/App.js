import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  // const [squares, setSquares] = useState(Array(9).fill(null)) ([
    const [board, setBoard] = useState([
  "▪️",
  "▪️",
  "▪️",
  "▪️",
  "▪️",
  "▪️",
  "▪️",
  "▪️",
  "▪️"
  ])

  // const [xLocation, setXLocation] = useState(Math.floor(Math.random() * board.length))

  // const [oLocation, setOLocation] = useState(Math.floor(Math.random() * board.length))

  // ^^ did not work

  const [currentPlayer, setCurrentPlayer] = useState("❌")

  const handleGamePlay = (clickedSquare) => {
    console.log(clickedSquare)
    let updateBoard = [...board]
    if(updateBoard[clickedSquare] === "▪️") {
      updateBoard[clickedSquare] = currentPlayer
      setBoard(updateBoard)
      setCurrentPlayer(
        currentPlayer === "❌" ? "⭕️" : "❌")
          
      


      
    }

  
  }

  return (
   <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((square, index) => {
        return (
          <Square square={square} index={index} handleGamePlay={handleGamePlay}/>
        )
        
  })}
        </div>
      </>
  )
}

export default App