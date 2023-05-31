import { getMovie } from "components/GetMovie/getMovie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId }  = useParams();
    useEffect(()=>{
        const REQUEST_API = `movie/${movieId}/reviews?`
        if (movieId !== '') getMovie(REQUEST_API).then(setReviews).then(console.log(reviews))
    }, [movieId]);
    return <>
    <h1>Reviews</h1>
    {reviews.total_results ? <ul>
        {reviews.results && reviews.results.map(review => <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
        </li>)}
    </ul> : <h3>We don't have any reviews</h3>}
    </>
};

export default Reviews;