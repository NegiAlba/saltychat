import { auth } from '../services/firebase';

const ChatMessage = ({message}) => {
    const { text, uid, photoURL, displayName} = message;

    const messageClass = uid === auth().currentUser.uid ? 'sent' : 'received'
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || "https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png"} alt="calme toi frere"/>
            <p>{text}</p>
            <p>by {displayName}</p>
        </div>
    )
}

export default ChatMessage
