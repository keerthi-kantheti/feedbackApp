import './index.css'

const Emoji = props => {
  const {emojiDetails, onClickEmoji} = props
  const {name, imageUrl} = emojiDetails

  const clickEmoji = () => {
    onClickEmoji()
  }
  return (
    <li>
      <img
        src={imageUrl}
        alt={name}
        className="emoji-image"
        onClick={clickEmoji}
      />
      <p className="emoji-para">{name}</p>
    </li>
  )
}
export default Emoji
