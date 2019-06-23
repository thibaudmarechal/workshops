class Engine { 
  gameLoop = () => { 
    if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime() 
    let timeDiff = (new Date).getTime() - this.lastFrame 
    this.lastFrame = (new Date).getTime() 
    this.enemies.forEach(enemy => { 
      enemy.update(timeDiff) 
    }) 
    this.enemies = this.enemies.filter(enemy => { 
      return !enemy.destroyed 
    }) 
    while (this.enemies.length < MAX_ENEMIES) { 
      let spot = nextEnemySpot(this.enemies) 
      this.enemies.push(new Enemy(this.root, spot)) 
    } 
    if (this.isPlayerDead()) { 
      window.alert("Game over") 
      return 
    } 
    setTimeout(this.gameLoop, 20) 
  } 
  isPlayerDead = () => { 
    return false 
  } 
  constructor(theRoot) { 
    this.root = theRoot 
    this.player = new Player(this.root) 
    this.enemies = [] 
    addBackground(this.root) 
  } 
} 