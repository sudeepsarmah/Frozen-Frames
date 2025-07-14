import { useState, useEffect } from "react"
import { getPosters } from "../services/api"
import "../css/Home.css"


export default function Posters() {
    const [imageURLs, setImageURLs] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPosters = async () => {
            try {
                const urls = await getPosters()
                setImageURLs(urls)
            } catch (err) {
                console.log(err)
                setError("Failed to load Posters from source")
            }
        }
        loadPosters()

    }, [])

    return (
        <>
            <section className="photograph-container">
                {imageURLs.map((url, apiIndex) =>
                    <img src={url} alt="photograph" key={apiIndex} loading="lazy" />
                )}
            </section>
        </>
    )
}