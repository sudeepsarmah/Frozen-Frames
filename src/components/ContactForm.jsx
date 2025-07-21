import "../css/ContactForm.css"
import { useState } from "react"
import ThankYou from "./ThankYou"

export default function ContactForm() {
    const [showModal, setShowModal] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        if (form["bot-field"].value) return
        const formData = new FormData(form)

        try {
            const res = await fetch("https://formspree.io/f/xzzvdlpk", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            })

            if (res.ok) {
                form.reset()
                setShowModal(true)
            } else {
                alert("Something went wrong, please try again.")
            }
        } catch (err) {
            console.error("Form submission error:", err)
            alert("Submission failed. Please try again later.")
        }
    }

    return (
        <>
            <form id="contactForm" method="POST" onSubmit={onSubmit}>
                <label htmlFor="firstName">First Name *</label>
                <input type="text" name="firstName" id="firstName" required />
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" name="lastName" id="lastName" required />
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="subject">Subject *</label>
                <input type="text" name="subject" id="subject" required />
                <input type="text" name="bot-field" style={{ display: "none" }} />
                <label htmlFor="message">Message *</label>
                <textarea name="message" id="message" required></textarea>
                <button className="btn-submit">Submit</button>
            </form>

            {showModal && <ThankYou onClose={() => setShowModal(false)} />}
        </>
    )
}