import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Score from './Score'
import Board from './Board'
import Controls from './Control'
import Spinner from './utils/Spinner'

import words from './words.json'

function kanjiKey(k1, k2) {
  return k1 < k2 ? k1 + k2 : k2 + k1
}

function loadWords() {
  return new Promise((resolve) => {
    const kanjis = []
    const index = {}
    words.forEach((word, i) => {
      let [k1, k2] = word
      kanjis.push(k1, k2)
      index[kanjiKey(k1, k2)] = i
    })
    resolve([kanjis, index])
  })
}

let kanjis = []
let index = {}

const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]]

function initialKanji() {
  return kanjis[Math.floor(Math.random() * kanjis.length)]
}

function initialState(size) {
  const m = Math.floor(size/2)
  return {kanji: initialKanji(), i: m, j: m, score: 0, words: []}
}

function parseInput(v) {
  if (!v)
    return ""
  return v.trimStart()[0] || ""
}

function App() {
  const [loading, setLoading] = useState(true)
  const [gameID, setGameID] = useState(0)
  const [size, setSize] = useState(9)
  const [history, setHistory] = useState([])
  const [kanji, setKanji] = useState("")
  const kanjiInput = {
    value: kanji,
    onChange: e => setKanji(e.target.value)
  }

  // const history = [
  //   {kanji: "運", i: 3, j: 3, score: 1, words: ["運命"]},
  //   {kanji: "先", i: 5, j: 4, score: 1, words: ["先生"]},
  //   {kanji: "命", i: 4, j: 3, score: 1, words: ["生命"]},
  //   {kanji: "生", i: 4, j: 4, score: 0, words: []}
  // ]
  
  const board = {}
  const used = {}
  const adj = {}
  history.forEach(({i, j, kanji}) => {
    used[kanji] = true
    board[i*size+j] = kanji
    adj[i*size+j+1] = true
    adj[i*size+j-1] = true
    adj[(i+1)*size+j] = true
    adj[(i-1)*size+j] = true
  })

  const reset = (newSize) => {
    let s = size
    if (newSize) {
      s = newSize
      setSize(newSize)
    }
    setGameID(gameID + 1)
    setHistory([initialState(s)])
  }

  const changeSize = (delta) => {
    const size_ = size + delta * 2
    if (size_ >= 3 && size_ <= 25)
      reset(size_)
  }

  const play = (kanji, i, j) => {
    if (used[kanji])
      return
    const matches = moves.map(([di, dj]) => {
        const k2 = board[(i+di)*size + j+dj]
        if (!k2) return null
        const wi = index[kanjiKey(kanji, k2)]
        if (!wi) return null
        return words[wi]
      }).filter(v => v)
    const m = matches.length
    if (m > 0) {
      const state = {kanji: kanji, i: i, j: j, score: 1 << (m-1), words: matches}
      setHistory([state, ...history])
      setKanji("")
    }
  }

  useEffect(() => {
    loadWords().then(([kanjis_, index_]) => {
      kanjis = kanjis_
      index = index_
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
          <Board gameID={gameID} size={size} board={board} adj={adj}
            onClick={play} kanji={parseInput(kanji)} />
          <Controls size={size} onReset={() => reset()}
            onChangeSize={changeSize} kanjiInput={kanjiInput} />
        </div>
      </div>
      {loading ? <Spinner msg="Loading..." /> : null}
    </>
  )
}

export default App
