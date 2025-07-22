import "../css/ContactForm.css"
import { useState, useRef } from "react"
import ThankYou from "./ThankYou"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactForm() {
    const [showModal, setShowModal] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const recaptchaRef = useRef(null)
    const [text, setText] = useState("")
    const maxChars = 250


    const onSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        if (form["bot-field"].value) return

        const token = recaptchaRef.current.getValue()
        if (!token) {
            alert("Please complete the reCAPTCHA")
            return
        }
        const formData = new FormData(form)
        formData.append("g-recaptcha-response", token)

        try {
            const res = await fetch("https://formspree.io/f/xzzvdlpk", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            })

            if (res.ok) {
                form.reset()
                setShowModal(true)
                setIsVerified(false)
                recaptchaRef.current.reset()
            } else {
                alert("Something went wrong, please try again.")
            }
        } catch (err) {
            console.error("Form submission error:", err)
            alert("Submission failed. Please try again later.")
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
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
                <textarea maxLength={maxChars} value={text} onChange={handleChange} name="message" id="message" required></textarea>
                <p className="max-char-count">{maxChars - text.length} characters remaining</p>

                <ReCAPTCHA
                    sitekey="6LeSsYorAAAAAGj2WYRAvmb-7FJ-4Ve6h0kwzQkY"
                    onChange={() => setIsVerified(true)}
                    onExpired={() => setIsVerified(false)}
                    ref={recaptchaRef}
                />

                <button className="btn-submit" type="submit" disabled={!isVerified}>Submit</button>
            </form>


            {showModal && <ThankYou onClose={() => setShowModal(false)} />}
        </>
    )
}