import { getMovie } from "components/GetMovie/getMovie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId }  = useParams();
    useEffect(()=>{
        const REQUEST_API = `movie/${movieId}/reviews?`
        if (movieId !== '') getMovie(REQUEST_API).then(setReviews)
    }, [movieId]);
    return <>
    <h2>Reviews</h2>
    {reviews.total_results ? <ul>
        {reviews.results && reviews.results.map(review => <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
        </li>)}
    </ul> : <p>We don't have any reviews</p>}
    </>
};

export default Reviews;