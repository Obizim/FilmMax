import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../utilities";
import Loading from "../components/Loading";
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
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };

    loadMovie();
    window.scrollTo(0,0);
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="lg:px-20 lg:py-10 md:py-10 text-gray-900 font-quicksand">
          <div
            key={id}
            className="lg:container md:container lg:px-14 md:mx-auto lg:mx-auto flex items-center flex-wrap"
          >
            <div className="w-full md:w-1/2">
              <img
                src={url + movie.poster_path}
                alt={movie.title}
                className="rounded-t-lg md:rounded-l-lg"
              />
            </div>

            <div className="p-6 leading-tight space-y-5 w-full md:w-1/2">
              <h2 className="font-normal text-xl md:text-3xl mb-2">
                {movie.title}
              </h2>
              <p className="">Release Date: {movie.release_date}</p>
              <div className="flex flex-row flex-wrap">
                Genres:&nbsp;
                {movie.genres
                  .filter((genre) => {
                    if (genre.name === null) {
                      return false;
                    }
                    return true;
                  })
                  .map((genre, index) => (
                    <div key={genre.id}>
                      <p className="text-red-600">
                        {genre.name}
                        {index < movie.genres.length - 1 ? ",\u00A0" : ""}
                      </p>
                    </div>
                  ))}
              </div>
              <p className="leading-snug">{movie.overview}</p>
              <p>
                Vote Count:
                <span className="text-red-600">{movie.vote_count}</span>
              </p>
              <p>
                Vote Average:
                <span className="text-red-600">{movie.vote_average}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Moviedetail;
