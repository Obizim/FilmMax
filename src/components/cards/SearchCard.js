import { url, maxTitle } from "../../utilities";
import { Link } from "react-router-dom";

const SearchCard = ({ to, searchedMovies }) => {
  return (
    <section className="absolute right-0 text-gray-600 bg-gray-100">
      {searchedMovies.map(({ id, poster_path, title, original_name }) => {
        let name;
        if (title) {
          name = maxTitle(title);
        } else {
          name = maxTitle(original_name);
        }
        return (
          <Link to={to + id} key={id}>
            <div className="flex flex-row justify-between items-center border-b py-4 px-4 cursor-pointer hover:bg-gray-400">
              <img src={url + poster_path} alt="poster" className="w-8" />
              <p>{name}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default SearchCard;
