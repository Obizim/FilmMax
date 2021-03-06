import React from "react";
import { Link } from "react-router-dom";
import { maxTitle, url } from "../../utilities";

function TvshowsCard({ title, tvshows }) {
  return (
    <div className="lg:py-14">
      <h2 className="lg:text-4xl text-2xl py-8 px-4 lg:px-28 text-red-600 font-quicksand">
        {title}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 lg:py-4 lg:px-28 md:p-18 p-4">
        {tvshows &&
          tvshows.map(({ id, name, poster_path }) => {
            let title = maxTitle(name);
            return (
              <Link key={id}  to={`/tvshow/${id}`}>
                <div className="font-quicksand">
                  <img src={url + poster_path} alt={name} />
                  <p className="text-normal text-gray-900 mt-2">{title}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default TvshowsCard;
