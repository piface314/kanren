import './Header.css'
import {ReactComponent as HelpIcon} from './assets/help.svg'
import {ReactComponent as AboutIcon} from './assets/about.svg'


function Header({help, about}) {
  return (
    <div className="header">
      <div className="header-limiter">
        <button onClick={help}>
          <HelpIcon aria-label="help" />
        </button>
        <h2>漢連 - KanRen</h2>
        <button onClick={about}>
          <AboutIcon aria-label="about" />
        </button>
      </div>
    </div>
  )
}

export default Header
