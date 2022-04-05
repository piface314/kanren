import './Spinner.css'


function Spinner({msg}) {
  return (
    <div className="spinner-cover">
      <div className="spinner"></div>
      <h1>{msg}</h1>
    </div>
  )
}

export default Spinner