import { useParams } from "react-router-dom";

const Movies = () => {
  const params = useParams();
  console.log(params)
  return <div>Movies</div>;
};

export default Movies;
