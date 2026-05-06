# Frozen Dash - Endless Runner Game

A fast-paced endless runner game built with Phaser 3 and TypeScript. Jump over obstacles and beat your high score!

## 🎮 Gameplay

- **Automatic movement**: The player runs automatically
- **Jump mechanic**: Press SPACE (desktop) or TAP (mobile) to jump
- **Progressive difficulty**: Game gets harder as your score increases
- **Obstacle spawning**: Obstacles appear randomly from the right and move left
- **Collision detection**: Hit an obstacle = Game Over!
- **Score system**: Points increase based on time survived

## 🕹️ Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Jump | SPACE | Tap Screen |
| Restart | SPACE | Tap Screen |

## 🚀 Getting Started

### Requirements

- Node.js 16.15.0
- Yarn 1.22.11

### Installation

```bash
# Install dependencies
yarn install --frozen-lockfile

# Start development server
yarn start

# Build for production
yarn build

# Preview production build
yarn serve

# Lint code
yarn lint
```

The game will be available at `http://localhost:8080`

## 📦 Project Structure

```
/
├── index.html          # Main HTML file
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── src/
│   └── main.ts        # Game entry point and GameScene
├── config/
│   └── vite.config.js # Vite bundler configuration
├── public/            # Static assets (optional)
└── dist/              # Production build output
```

## 🎯 Game Features

- ✅ Endless runner mechanics with progressive difficulty
- ✅ Physics-based player movement with gravity and jumping
- ✅ Obstacle spawning with increasing frequency
- ✅ Real-time score calculation
- ✅ Simple, intuitive UI
- ✅ Responsive design (desktop & mobile)
- ✅ Clean, well-commented TypeScript code

## 🌐 Play Online

🎮 **Play Frozen Dash**: https://gianlucastefanoni.github.io/BasicPhaser/

## 📝 Technologies

- **Phaser 3** - Game framework
- **TypeScript** - Language
- **Vite** - Bundler
- **Arcade Physics** - Physics engine

## 📄 License

MIT

---

Built with ❄️ by Gianlucastefanoni
