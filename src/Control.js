import './Control.css'
import {ReactComponent as RestartIcon} from './assets/restart.svg'
import {ReactComponent as MinusIcon} from './assets/minus.svg'
import {ReactComponent as PlusIcon} from './assets/plus.svg'

function Control({size}) {
  return (
    <div className="control">
      <div className="container">
        <div className="control-group">
          <button>
            <RestartIcon />
          </button>
          <button>
            <MinusIcon />
          </button>
          <div className="size-display bg-overlay">
            <p>{size}</p>
          </div>
          <button>
            <PlusIcon />
          </button>
        </div>
        <div className="kanji-guess">
          <input className="bg-overlay" type="text" placeholder="Type a kanji..."></input>
        </div>
      </div>
    </div>
  )
}

export default Control
