import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../redux/movies/MovieTypes";
import axios from "axios";

function Moviedetail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0451e553a464ab7929fee2e705dab05e`
        );
        const movie = response.data;
        setMovie(movie);
        console.log(movie);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };

    loadMovie();
  }, [id]);

  return (
    <div className="h-screen bg-gray-900 text-gray-100">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div key={movie.id} className="h-full lg:px-20 lg:py-8 py-10">

          <div className="lg:container md:container md:mx-auto lg:mx-auto md:flex md:items-center">
            <img
              src={url + movie.poster_path}
              alt={movie.title}
              className="md:w-1/3 rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            />

            <div className="p-6 leading-tight space-y-5 bg-gray-900">
              <h2 className="font-normal text-xl md:text-3xl mb-2">
                {movie.title}
              </h2>
              <p className="">Release Date: {movie.release_date}</p>
              <div className="flex flex-row">
                Genres:&nbsp;
                {movie.genres.map((genre, index) => (
                  <p className="text-red-600">
                    {genre.name}
                    {index < movie.genres.length - 1 ? ",\u00A0" : ""}
                  </p>
                ))}
              </div>
              <p className="leading-snug">{movie.overview}</p>
              <p>Vote Count: <span className="text-red-600">{movie.vote_count}</span></p>
              <p>Vote Average: <span className="text-red-600">{movie.vote_average}</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Moviedetail;
