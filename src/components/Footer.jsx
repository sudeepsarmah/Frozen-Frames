import { format } from 'date-fns'
import { Github, BriefcaseBusiness, Twitter } from 'lucide-react'
import '../css/Footer.css'
export default function Footer() {
    const date = new Date()
    const formattedDate = format(date, 'yyyy')

    return (
        <>
            <footer>
                <div className="footer-trademark">
                    <h4>@{formattedDate} || Sudeepta Sarmah</h4>
                </div>
                <div className='footer-links'>
                    <a href="/"><Github size={16} /> Github</a>
                    <a href="/"><BriefcaseBusiness size={16} /> Portfolio</a>
                    <a href="/"><Twitter size={16} /> Twitter</a>
                </div>
            </footer>
        </>
    )
}