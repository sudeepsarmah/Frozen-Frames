import { useState, useEffect } from "react"
import { getPhotographs } from "../services/api"

import "../css/Home.css"
import { data } from "react-router-dom"

export default function Home() {
    const [imageURLs, setImageURLs] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPhotographs = async () => {
            try {
                const urls = await getPhotographs()
                setImageURLs(urls)
            } catch (err) {
                console.log(err)
                setError("Failed to load Photographs from source")
            }
        }
        loadPhotographs()

    }, [])

    return (
        <>
            <section className="photograph-container">
                {error && <p>{error}</p>}
                {imageURLs.map((url, index) =>
                    <img src={url} alt="photograph" key={index} loading="lazy" />
                )}
            </section>
        </>
    )
}