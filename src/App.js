import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Score from './Score'
import Board from './Board'
import Controls from './Control'
import Spinner from './utils/Spinner'

import wordsJP from './words.json'
import SymbolBoard from './state/SymbolBoard'
import WordIndex from './state/WordIndex'
import Play from './state/Play'

function parseInput(v) {
  if (!v)
    return ""
  return v.trimStart()[0] || ""
}

let wordIndex = new WordIndex([], [], {})

function App() {
  const [loading, setLoading] = useState(true)
  const [gameID, setGameID] = useState(0)
  const [size, setSize] = useState(5)
  const [history, setHistory] = useState([])
  const [symbol, setSymbol] = useState("")
  const symbolInput = {
    value: symbol,
    onChange: e => setSymbol(e.target.value)
  }
  
  const board = new SymbolBoard(size)
  const used = {}
  history.forEach(({i, j, symbol}) => {
    used[symbol] = true
    board.set(i, j, symbol)
  })

  const reset = (newSize) => {
    let s = size
    if (newSize) {
      s = newSize
      setSize(newSize)
    }
    setGameID(gameID + 1)
    setHistory([Play.init(s, wordIndex)])
  }

  const changeSize = (delta) => {
    const size_ = size + delta * 2
    if (size_ >= 3 && size_ <= 25)
      reset(size_)
  }

  const play = (symbol, i, j) => {
    if (used[symbol])
      return
    const matches = board.moves(i, j).map(([i_, j_]) => {
        const [s2, _] = board.get(i_, j_)
        if (!s2) return null
        return wordIndex.get(symbol, s2)
      }).filter(w => w)
    const m = matches.length
    if (m > 0) {
      const state = Play.create(symbol, i, j, 1 << (m-1), matches)
      setHistory([state, ...history])
      setSymbol("")
    }
  }

  useEffect(() => {
    WordIndex.load(wordsJP).then(wi => {
      wordIndex = wi
      reset()
      setLoading(false)
    })
  }, [])

  return (
    <>
      <div className="app">
        <Header />
        <div className="game">
          <Score history={history} />
          <Board gameID={gameID} size={size} board={board}
            onClick={play} floating={parseInput(symbol)} />
          <Controls size={size} onReset={() => reset()}
            onChangeSize={changeSize} symbolInput={symbolInput} />
        </div>
      </div>
      {loading ? <Spinner msg="Loading..." /> : null}
    </>
  )
}

export default App
