import "../css/Bio.css"
import { Github, BriefcaseBusiness, Twitter } from 'lucide-react'
import ContactForm from "../components/ContactForm"

export default function Bio() {
    return (
        <section className="bio">
            <div className='bio-data'>
                <h3 className="bio-heading">CONTACT</h3>
                <h4 className="bio-name">Sudeepta Sarmah</h4>
                <p>Photography, pixel art, posters and creative arts. Feel free to browse through my galleries. You can mail me if you would like to have any of the photographs or posters or just want to leave a short message. Thank you for visiting.</p>
                <div className='bio-links'>
                    <a href="https://github.com/sudeepsarmah" target="_blank" rel="noopener noreferrer"><Github size={20} /> Sudeepta Sarmah</a>
                    <a href="https://github.com/sudeepsarmah" target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={20} /> Sudeepta Sarmah</a>
                    <a href="https://x.com/sudeepta_sarmah" target="_blank" rel="noopener noreferrer"><Twitter size={20} /> Sudeepta Sarmah</a>
                </div>
            </div>
            <div className="contact-form">
                <ContactForm></ContactForm>
            </div>
        </section>
    )
}