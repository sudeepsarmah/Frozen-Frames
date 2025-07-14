import "../css/ContactForm.css"


export default function ContactForm() {
    return (
        <form action="/">
            <label htmlFor="">First Name *</label>
            <input type="text" required />
            <label htmlFor="">Last Name *</label>
            <input type="text" required />
            <label htmlFor="">Email *</label>
            <input type="email" required />
            <label htmlFor="">Subject *</label>
            <input type="text" required />
            <label htmlFor="">Message *</label>
            <textarea name="" id=""></textarea>
            <button className="btn-submit">Submit</button>
        </form>
    )
}