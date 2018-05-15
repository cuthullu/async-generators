class Equator {
  constructor(action, state) {
    this.run = () => action()
    this.state = state
  }
}