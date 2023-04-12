import './index.css'

const EmojiCard = props => {
  const {emojiDetails, addEmojiToClickedEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onClickEmoji = () => {
    addEmojiToClickedEmoji(id)
  }
  return (
    <li className="emoji-item-card">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
