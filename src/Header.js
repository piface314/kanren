import './Header.css'
import {ReactComponent as HelpIcon} from './assets/help.svg'
import {ReactComponent as AboutIcon} from './assets/about.svg'


function Header() {
  return (
    <div className="header">
      <div className="header-limiter">
        <button>
          <HelpIcon />
        </button>
        <h2>漢連 - KanRen</h2>
        <button>
          <AboutIcon />
        </button>
      </div>
    </div>
  )
}

export default Header
