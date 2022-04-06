import './Dialog.css'
import Overlay from './Overlay'


function Dialog({children, actions, close, closeAction}) {
  const close_ = closeAction ? actions[closeAction].onClick : close
  const onClick = (e) => {
    if (e.target === e.currentTarget)
      close_()
  }
  return (
    <Overlay onClick={onClick}>
      <div className="dialog bg-highlight">
        <div className="dialog-wrapper">
          {children}
        </div>
      </div>
    </Overlay>
  )
}

export default Dialog