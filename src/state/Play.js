export default class Play {
  
  static init(size, wordIndex) {
    const m = Math.floor(size/2)
    return this.create(wordIndex.choose(), m, m, 0, [])
  }

  static create(symbol, i, j, score, words) {
    return {symbol, i, j, score, words}
  }
  
}