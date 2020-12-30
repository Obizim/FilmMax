import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../redux/movies/MovieTypes";
import Loading from "../Loading";
import axios from "axios";

function Moviedetail() {
  const [movie, setMovie] = useState([]);
  const [castCrew, setCastCrew] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0451e553a464ab7929fee2e705dab05e`
        );
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0451e553a464ab7929fee2e705dab05e`
        );
        const resp = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0451e553a464ab7929fee2e705dab05e`
        );
        const movie = response.data;
        const castCrew = res.data.cast;
        const trailer = resp.data.results;
        setMovie(movie);
        setCastCrew(castCrew);
        setTrailer(trailer);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };

    loadMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="lg:px-20 lg:py-10 md:py-10 bg-gray-900 text-gray-100 font-quicksand">
          <div
            key={id}
            className="lg:container md:container lg:px-14 md:mx-auto lg:mx-auto flex items-center flex-wrap bg-gray-900"
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
                Vote Count:{" "}
                <span className="text-red-600">{movie.vote_count}</span>
              </p>
              <p>
                Vote Average:{" "}
                <span className="text-red-600">{movie.vote_average}</span>
              </p>
            </div>
          </div>

          {castCrew.length > 0 && (
            <div className="lg:py-14 bg-gray-900 w-full">
              <h2 className="lg:text-4xl text-2xl px-4 py-8 text-red-600">
                Cast
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 lg:py-4 md:p-18 p-4">
                {castCrew
                  .filter((cast) => {
                    if (cast.profile_path === null) {
                      return false;
                    }
                    return true;
                  })
                  .map((cast) => (
                    <div key={cast.id}>
                      <img
                        className="rounded"
                        src={url + cast.profile_path}
                        alt={cast.name}
                      />
                      <h2>{cast.name}</h2>
                      <p className="text-red-600 mt-2">{cast.character}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="p-4">
            {trailer.map((trailer) => {
              const youtubeUrl = `https://youtube.com/embed/${trailer.key}`;
              return (
                <div key={trailer.key} className="flex lg:flex-row lg:items-center justify-center space-x-4">
                  <iframe
                    src={youtubeUrl}
                    title={trailer.name}
                    width="560"
                    height="315"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Moviedetail;
