import './Board.css'
import React, { useEffect } from 'react';


const tileSize = 4
function Tile({i, j, kanji, adj, input, onClick}) {
  const tclass = kanji ? "filled" : adj ? "adj" : "unavailable"
  const play = () => {
    if (tclass === "adj")
      onClick(input, i, j)
  }
  return (
    <td className={"tile "+tclass} onClick={play}>
      <div>
        {kanji || input}
      </div>
    </td>
  )
}

function Board({gameID, size, board, adj, kanji, onClick}) {
  
  // scroll to center when the game starts
  useEffect(() => {
    const scroll = document.getElementById('board-scroll')
    const content = document.getElementById('board-tiles')
    const left = (content.offsetWidth - scroll.offsetWidth) / 2
    const top = (content.offsetHeight - scroll.offsetHeight) / 2
    scroll.scrollTo(left, top)
  }, [gameID])

  const boardSize = `${tileSize * size}rem`
  const tiles = Array(size).fill().map((_, i) =>
    <tr key={i}>
      {Array(size).fill().map((_, j) =>
        <Tile key={j} i={i} j={j} kanji={board[i*size+j]} adj={adj[i*size+j]}
          input={kanji} onClick={onClick} />)}
    </tr>
  )
  
  return (
    <div className="board bg-overlay">
      <div className="container">
        <div id="board-scroll" className="scrolled">
          <table id="board-tiles" style={{height: boardSize, width: boardSize}}>
            <tbody>
              {tiles}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Board
