// Write your code here.
import './index.css'

const wonImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {clickedEmojiesList, playAgain} = props

  const score = clickedEmojiesList.length
  const isWon = score === 12

  const onClickPlayAgain = () => {
    playAgain(score)
  }

  return (
    <div className="win-or-lose-card">
      <img
        src={isWon ? wonImgUrl : loseImgUrl}
        alt="win or lose"
        className="win-or-lose-img"
      />
      <div className="won-or-lose-content-container">
        <h1 className="won-lose-text">{isWon ? 'You Won' : 'You Lose'}</h1>
        <p className="best-score-or-score-text">
          {isWon ? 'Best Score' : 'Score'}
        </p>
        <p className="op-Score">{score}/12</p>
        <button
          className="paly-again-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
