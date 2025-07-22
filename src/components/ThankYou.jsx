import '../css/ThankYou.css'
export default function ThankYou({ onClose }) {

    return (
        <div className="thank-you-modal">
            <div className="modal-content">
                <h2>Thank You for your message!!</h2>
                <p>Your message has been successfuly sent.</p>
                <button className="modal-close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}