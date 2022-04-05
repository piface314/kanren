const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]]

export default class SymbolBoard {

  constructor(size) {
    this.size = size
    this.board = Array(size*size).fill(null)
    this.adj = Array(size*size).fill(false)
  }

  inBounds(i, j) {
    return i >= 0 && i < this.size && j >= 0 && j < this.size
  }

  index(i, j) { return i * this.size + j }

  set(i, j, s) {
    if (!this.inBounds(i, j))
      return
    this.board[this.index(i, j)] = s
    this.moves(i, j).forEach(([i_, j_]) => {
      this.adj[this.index(i_, j_)] = true
    })
  }

  get(i, j) {
    if (!this.inBounds(i, j))
      return [null, false]
    const idx = this.index(i, j)
    return [this.board[idx], this.adj[idx]]
  }

  moves(i, j) {
    return moves
      .map(([di, dj]) => [i + di, j + dj])
      .filter(([i, j]) => this.inBounds(i, j))
  }
}