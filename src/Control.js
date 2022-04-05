import './Control.css'
import { ReactComponent as RestartIcon } from './assets/restart.svg'
import { ReactComponent as MinusIcon } from './assets/minus.svg'
import { ReactComponent as PlusIcon } from './assets/plus.svg'

function Control({ size, onReset, onChangeSize, kanjiInput }) {  
  return (
    <div className="control">
      <div className="container">
        <div className="control-group">
          <button onClick={onReset}>
            <RestartIcon />
          </button>
          <button onClick={() => onChangeSize(-1)}>
            <MinusIcon />
          </button>
          <div className="size-display bg-overlay">
            <p>{size}</p>
          </div>
          <button onClick={() => onChangeSize(+1)}>
            <PlusIcon />
          </button>
        </div>
        <div className="kanji-guess">
          <input {...kanjiInput} className="bg-overlay" type="text" placeholder="Type a kanji..."></input>
        </div>
      </div>
    </div>
  )
}

export default Control
