import './Help.css'
import Dialog from "./utils/Dialog"
import { ReactComponent as RestartIcon } from './assets/restart.svg'
import { ReactComponent as MinusIcon } from './assets/minus.svg'
import { ReactComponent as PlusIcon } from './assets/plus.svg'

function Inline({children}) {
  return <span className="inline-icon">{children}</span>
}

function Help({close}) {
  const minus   = <Inline><MinusIcon aria-label="minus" width="1em" height="1em"/></Inline>
  const plus    = <Inline><PlusIcon aria-label="plus" width="1em" height="1em"/></Inline>
  const restart = <Inline><RestartIcon aria-label="restart" width="1em" height="1em"/></Inline>
  return (
    <Dialog close={close}>
      <h1>Help</h1>
      <p>
        KanRen is a vocabulary practice game! When the game starts,
        a random 漢字 will be inserted at the center of the board. You must
        insert more 漢字 to fill the blank spaces, but they must connect to
        an adjacent symbol to form a word, and they cannot repeat.
      </p>
      <p>
        Connecting 漢字 together earns you points: +1 when a new symbol is added,
        and doubling by every extra word you could find for that same symbol.
        E.g., if both 一 and 二 are on the board and you connect 日, you get +2;
        if 常 was also adjacent, that's +4; and if 毎 was also around, it's the 
        maximum of +8 points.
      </p>
      <p>
        You can change the board size by clicking on the {minus} and {plus} buttons,
        and also restart the game by pressing on the {restart} button. Use the input
        field to type the 漢字, and if more than one character is typed, only the
        first one is considered.
      </p>

    </Dialog>
  )
}

export default Help