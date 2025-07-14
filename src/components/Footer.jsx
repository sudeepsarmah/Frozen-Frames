import { format } from 'date-fns'
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
                    <a href="/">Github</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Twitter</a>
                </div>
            </footer>
        </>
    )
}