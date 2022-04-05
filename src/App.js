import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './Header'
import Score from './Score'
import Board from './Board'
import Controls from './Control'



function App() {
  const [gameID, setGameID] = useState(0)
  const [size, setSize] = useState(9)
  // const [history, setHistory] = useState([])
  const history = [
    {kanji: "運", i: 3, j: 3, score: 1, words: ["運命"]},
    {kanji: "先", i: 5, j: 4, score: 1, words: ["先生"]},
    {kanji: "命", i: 4, j: 3, score: 1, words: ["生命"]},
    {kanji: "生", i: 4, j: 4, score: 0, words: []}
  ]
  
  const board = {}
  const adj = {}
  history.forEach(({i, j, kanji}) => {
    board[i*size+j] = kanji
    adj[i*size+j+1] = true
    adj[i*size+j-1] = true
    adj[(i+1)*size+j] = true
    adj[(i-1)*size+j] = true
  })

  const reset = () => {
    setGameID(gameID + 1)
    // setHistory([])
  }

  const changeSize = (delta) => {
    const size_ = size + delta * 2
    if (size_ >= 3 && size_ <= 25)
      setSize(size_)
  }

  const play = (kanji, i, j) => {

  }

  return (
    <div className="app">
      <Header />
      <div className="game">
        <Score history={history} />
        <Board gameID={gameID} size={size} board={board} adj={adj} onClick={play} />
        <Controls size={size} onReset={reset} onChangeSize={changeSize} />
      </div>
    </div>
  )
}

export default App
