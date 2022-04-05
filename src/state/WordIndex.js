export default class WordIndex {

  static ikey(s1, s2) {
    return s1 < s2 ? s1 + s2 : s2 + s1
  }

  static load(words) {
    return new Promise((resolve) => {
      const symbols = []
      const index = {}
      words.forEach((word, i) => {
        let [s1, s2] = word
        symbols.push(s1, s2)
        index[this.ikey(s1, s2)] = i
      })
      resolve(new WordIndex(words, symbols, index))
    })
  }

  constructor(words, symbols, index) {
    this.words = words
    this.symbols = symbols
    this.index = index
  }

  get(s1, s2) {
    return this.words[this.index[WordIndex.ikey(s1, s2)]]
  }

  choose() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)]
  }

}