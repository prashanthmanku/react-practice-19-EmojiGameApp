import './index.css'

const NavBar = props => {
  const {isGameOver, topScoresList, clickedEmojiesList} = props

  const score = clickedEmojiesList.length
  const topScore = Math.max(...topScoresList)

  const renderNavItem = () => (
    <div className="nav-items-container">
      <p className="nav-item nav-item-size">Score: {score}</p>
      <p className="nav-item-size">Top Score: {topScore}</p>
    </div>
  )
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-content">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-img"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>
        {!isGameOver && renderNavItem()}
      </div>
    </div>
  )
}
export default NavBar
