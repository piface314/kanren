import './Spinner.css'
import Overlay from './Overlay'

function Spinner({msg}) {
  return (
    <Overlay>
      <div className="spinner"></div>
      <h1>{msg}</h1>
    </Overlay>
  )
}

export default Spinner