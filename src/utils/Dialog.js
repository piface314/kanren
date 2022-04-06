import './Dialog.css'
import Overlay from './Overlay'


function Dialog({children, actions, close, closeAction}) {
  const close_ = closeAction !== undefined ? actions[closeAction].onClick : close
  const onClick = (e) => {
    if (e.target === e.currentTarget)
      close_()
  }
  const buttons = (<div className="dialog-buttons">
    {(actions || []).map(({text, onClick}, i) =>
      <button key={i} onClick={onClick}>{text}</button>)}
  </div>)
  return (
    <Overlay onClick={onClick}>
      <div className="dialog bg-highlight">
        <div className="dialog-wrapper">
          {children}
        </div>
        {actions ? buttons : null}
      </div>
    </Overlay>
  )
}

export default Dialog