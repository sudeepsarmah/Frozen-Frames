const CLOUD_NAME = "djhxgf3jv"

export const getPhotographs = async () => {
    const response = await fetch("/photographs.json")
    if (!response.ok) {
        throw new Error("Failed to fetch photgraphs")
    }
    const publicIDs = await response.json()
    const urls = publicIDs.map(id => `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${id}.jpg`)
    return urls
}


export const getPosters = async () => {
    const response = await fetch("/posters.json")
    if (!response.ok) {
        throw new Error("Failed to fetch photographs")
    }
    const publicIDs = await response.json()
    const urls = publicIDs.map(id => `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${id}.jpg`)
    return urls
}