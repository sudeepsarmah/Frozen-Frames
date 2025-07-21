
export default function ThankYou({ onClose }) {

    return (
        <div className="thank-you-modal">
            <div className="modal-content">
                <h2>Thank You for your message!!</h2>
                <p>Your message has been successfulysent.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}