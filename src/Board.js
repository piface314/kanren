import './Board.css'
import React, { useEffect } from 'react'


const tileSize = 4
function Tile({ i, j, symbol, adj, input, onClick }) {
  const tclass = symbol ? "filled" : adj ? "adj" : "unavailable"
  if (tclass === 'adj')
    return (
      <td className="tile adj" onClick={() => onClick(input, i, j)}>
        <div onMouseEnter={e => e.target.innerHTML = input}
          onMouseLeave={e => e.target.innerHTML = ''}></div>
      </td>
    )
  return (
    <td className={"tile " + tclass}>
      <div>
        {symbol}
      </div>
    </td>
  )
}

function Board({ gameID, size, board, floating, onClick }) {

  // scroll to center when the game starts
  useEffect(() => {
    const scroll = document.getElementById('board-scroll')
    scroll.style.display = ''
    const content = document.getElementById('board-tiles')
    const left = (content.offsetWidth - scroll.offsetWidth) / 2
    const top = (content.offsetHeight - scroll.offsetHeight) / 2
    scroll.scrollTo(left, top)
    if (left < 0 && top < 0)
      scroll.style.display = 'flex'
    else
      scroll.style.display = ''
  }, [gameID])

  const boardSize = `${tileSize * size}rem`
  const tiles = Array(size).fill().map((_, i) =>
    <tr key={i}>
      {Array(size).fill().map((_, j) => {
        const [s, adj] = board.get(i, j)
        return <Tile key={j} i={i} j={j} symbol={s} adj={adj}
          input={floating} onClick={onClick} />
      })}
    </tr>
  )

  return (
    <div className="board bg-overlay">
      <div className="container">
        <div id="board-scroll" className="scrolled">
          <table id="board-tiles" style={{ height: boardSize, width: boardSize }}>
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
