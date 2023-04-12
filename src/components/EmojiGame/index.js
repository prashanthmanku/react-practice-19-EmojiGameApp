/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameOver: false, clickedEmojiesList: [], topScoresList: [0]}

  getShuffeledEmojiList = () => {
    const {emojisList} = this.props
    const shuffeledList = emojisList.sort(() => Math.random() - 0.5)
    return shuffeledList
  }

  addEmojiToClickedEmoji = id => {
    const {clickedEmojiesList} = this.state
    const isOver = clickedEmojiesList.includes(id)
    const isEnd = clickedEmojiesList.length === 11
    if (isOver) {
      this.setState({isGameOver: true})
    } else {
      if (isEnd) {
        this.setState({isGameOver: true})
      }
      this.setState({clickedEmojiesList: [...clickedEmojiesList, id]})
    }
  }

  playAgain = score => {
    const {topScoresList} = this.state

    this.setState({
      clickedEmojiesList: [],
      isGameOver: false,
      topScoresList: [...topScoresList, score],
    })
  }

  renderEmojiesList = () => {
    const emojiesList = this.getShuffeledEmojiList()
    return (
      <div>
        <p className="hint">Try to click individual emoji once</p>
        <ul className="emojies-list-container">
          {emojiesList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              addEmojiToClickedEmoji={this.addEmojiToClickedEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderWinOrLoseCard = () => {
    const {clickedEmojiesList} = this.state
    return (
      <WinOrLoseCard
        clickedEmojiesList={clickedEmojiesList}
        playAgain={this.playAgain}
      />
    )
  }

  render() {
    const {isGameOver, topScoresList, clickedEmojiesList} = this.state

    return (
      <div className="app-container">
        <NavBar
          isGameOver={isGameOver}
          topScoresList={topScoresList}
          clickedEmojiesList={clickedEmojiesList}
        />
        <div className="app-content-container">
          {isGameOver ? this.renderWinOrLoseCard() : this.renderEmojiesList()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
