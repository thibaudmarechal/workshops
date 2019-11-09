class Player {
  constructor(root) {
    this.x = 2 * PLAYER_WIDTH;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/player.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = "10";
    root.appendChild(this.domElement);
  }
  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }
    this.domElement.style.left = this.x + "px";
  }
  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = this.x + "px";
  }
  moveUp() {
    if (this.y - PLAYER_HEIGHT > 0) {
      this.y = this.y - PLAYER_HEIGHT;
    }
    this.domElement.style.top = this.y + "px";
  }
  moveDown() {
    if (this.y + PLAYER_HEIGHT < GAME_HEIGHT) {
      this.y = this.y + PLAYER_HEIGHT;
    }
    this.domElement.style.top = this.y + "px";
  }
}
