class Engine {
  gameLoop = () => {
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });
    while (this.enemies.length < MAX_ENEMIES) {
      let spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }
    if (this.isPlayerDead()) {
      window.alert("Game over");
      return;
    }
    setTimeout(this.gameLoop, 20);
  };
  isPlayerDead = () => {
    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i];
      if (
        enemy.x === this.player.x &&
        enemy.y + ENEMY_HEIGHT >= this.player.y &&
        enemy.y <= this.player.y + PLAYER_HEIGHT
      ) {
        return true;
      }
    }
    return false;
  };
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    addBackground(this.root);
  }
}
