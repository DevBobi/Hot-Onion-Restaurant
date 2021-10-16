import { useEffect, useState } from "react"

const useFoodItems = () => {
    const [foods, setFoods] = useState();
    const [images, setImages] = useState();

    useEffect(() => {
        fetch("/foods.json")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    useEffect(() => {
        fetch("/foods.json")
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return {
        foods,
        images
    }
}

export default useFoodItems;