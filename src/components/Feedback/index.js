// Write your React code here.
import {Component} from 'react'

import Emoji from '../Emoji'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickEmoji = () => {
    const {isClicked} = this.state
    const newValue = !isClicked
    this.setState({isClicked: newValue})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    return isClicked === false ? (
      <div className="bg-container">
        <div className="card1">
          <h1 className="heading">
            How satisfied are you with our customer support Performance?
          </h1>
          <div>
            <ul className="emojis-container">
              {emojis.map(eachItem => (
                <Emoji
                  key={eachItem.id}
                  emojiDetails={eachItem}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <div className="feedback-bg-container">
        <div className="feedback-card">
          <div>
            <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
            <h1 className="heading">Thank You!</h1>
          </div>

          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
