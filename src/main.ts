import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private obstacles!: Phaser.Physics.Arcade.Group;
  private score: number = 0;
  private gameOver: boolean = false;
  private scoreText!: Phaser.GameObjects.Text;
  private gameOverText!: Phaser.GameObjects.Text;
  private gameSpeed: number = 200;
  private spawnRate: number = 1500;
  private lastSpawnTime: number = 0;

  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // Background
    this.cameras.main.setBackgroundColor('#87CEEB');

    // Create player (green rectangle)
    this.player = this.physics.add.sprite(100, 200);
    this.player.setFillStyle(0x00FF00);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.displayWidth = 40;
    this.player.displayHeight = 60;

    // Create obstacles group
    this.obstacles = this.physics.add.group();

    // Setup collisions
    this.physics.add.collider(this.player, this.obstacles, this.hitObstacle, undefined, this);

    // Setup input
    this.input.keyboard?.on('keydown-SPACE', () => this.jump());
    this.input.on('pointerdown', () => this.jump());

    // Setup score text
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
      color: '#000000',
      fontFamily: 'Arial',
    });
    this.scoreText.setScrollFactor(0);

    // Setup game over text (hidden initially)
    this.gameOverText = this.add.text(400, 300, 'GAME OVER\nPress SPACE or Tap to Restart', {
      fontSize: '48px',
      color: '#FF0000',
      fontFamily: 'Arial',
      align: 'center',
    });
    this.gameOverText.setOrigin(0.5);
    this.gameOverText.setScrollFactor(0);
    this.gameOverText.setVisible(false);

    this.lastSpawnTime = this.time.now;
  }

  update() {
    if (this.gameOver) {
      return;
    }

    // Increase score
    this.score += 1;
    this.scoreText.setText('Score: ' + Math.floor(this.score / 10));

    // Increase difficulty over time
    this.gameSpeed += 0.02;
    if (this.spawnRate > 800) {
      this.spawnRate -= 0.5;
    }

    // Spawn obstacles
    if (this.time.now - this.lastSpawnTime > this.spawnRate) {
      this.spawnObstacle();
      this.lastSpawnTime = this.time.now;
    }

    // Remove obstacles that are off screen
    this.obstacles.children.forEach((obstacle: any) => {
      if (obstacle.x < -50) {
        obstacle.destroy();
      }
    });

    // Keep player in world bounds vertically
    if (this.player.y > 600) {
      this.hitObstacle();
    }
  }

  private jump() {
    if (this.gameOver) {
      this.scene.restart();
      return;
    }

    if (this.player.body?.touching.down) {
      this.player.setVelocityY(-400);
    }
  }

  private spawnObstacle() {
    const randomY = Phaser.Math.Between(300, 500);
    const obstacle = this.obstacles.create(800, randomY);
    obstacle.setFillStyle(0xFF0000);
    obstacle.setVelocityX(-this.gameSpeed);
    obstacle.displayWidth = 30;
    obstacle.displayHeight = 60;
  }

  private hitObstacle() {
    this.gameOver = true;
    this.player.setTint(0xff0000);
    this.gameOverText.setVisible(true);
    this.physics.pause();
  }
}

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  pixelArt: true,
  scale: {
    parent: 'game-container',
    width: 800,
    height: 600,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: '#87CEEB',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      debug: false,
    },
  },
  scene: [GameScene],
};

const game = new Phaser.Game(gameConfig);
