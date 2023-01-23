import { fetchMovieRatings } from "../../redux/actions/movies";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

const Detail = () => {

    const dispatch = useDispatch();

    console.log(dispatch);

    useEffect(() => {
        fetchMovieRatings();
    }, [])
    return <div>Detail</div>;
}

export default Detail;