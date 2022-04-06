import './Control.css'
import { ReactComponent as RestartIcon } from './assets/restart.svg'
import { ReactComponent as MinusIcon } from './assets/minus.svg'
import { ReactComponent as PlusIcon } from './assets/plus.svg'

function Control({ size, onReset, onChangeSize, symbolInput }) {  
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
          <div className="size-display bg-highlight">
            <p>{size}</p>
          </div>
          <button onClick={() => onChangeSize(+1)}>
            <PlusIcon />
          </button>
        </div>
        <div className="symbol-guess">
          <input size={3} {...symbolInput} className="bg-highlight" type="text" placeholder="Type a symbol..."></input>
        </div>
      </div>
    </div>
  )
}

export default Control
