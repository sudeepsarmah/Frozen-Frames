import { useState, useEffect } from "react"
import '../css/ScrollToTop.css'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        setVisible(window.scrollY > 300)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
        return () => window.removeEventListener('scroll', toggleVisible)
    }, [])

    return (
        <button className={`scroll-to-top ${visible ? 'show' : ''}`} onClick={scrollToTop}>
            ↑
        </button>
    )
}