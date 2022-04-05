import './Score.css'

function WordLink({word}) {
  return <a href={"https://jisho.org/search/"+word}>{word}</a>
}

function HistoryItem({kanji, i, j, score, words}) {
  const links = words
    .flatMap((w, i) => [', ', <WordLink key={i} word={w} />])
    .slice(1)
  return (
    <div className={"history-item" + (score > 0 ? "" : " start")}>
      <div className="main">
        <span className="info">{kanji} <code>@({j},{i})</code></span>
        <span className="points">{score > 0 ? '+' + score : 'start'}</span>
      </div>
      {score > 0 ?
        <div className="sub">[{links}]</div>
      : null}
    </div>
  )
}

function Score({history}) {
  const score = history.reduce((acc, {score}) => acc + score, 0)
  return (
    <div className="score">
      <div className="score-container">
        <div className="label">Score:</div>
        <div className="value bg-overlay">{score}</div>
      </div>
      <div className="history-container">
        <div className="label">History:</div>
        <div className="listing bg-overlay">
          {history.map((s, i) => <HistoryItem key={i} {...s} />)}
        </div>
      </div>
    </div>
  )
}

export default Score
