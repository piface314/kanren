import './Help.css'
import Dialog from "./utils/Dialog"

function About({close}) {
  const link = (<a href="https://github.com/piface314" target="_blank" rel="noopener noreferrer">
    Henrique Santana
  </a>)
  return (
    <Dialog close={close}>
      <h1>About</h1>
      <p>
        Created by {link} under GPL-3.0. 2022.
      </p>
      <p>
        漢連 - KanRen is a pun on 漢字 (kanji) and 関連 (relation/connection):
        one must connect related kanjis together :).
      </p>
    </Dialog>
  )
}

export default About