const SearchForm = ({ onhandleSubmit, onhandleSearch, searchTerm, placeholder }) => {
  return (
    <form onSubmit={onhandleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="pl-2 pr-32 py-4 text-gray-900 shadow outline-white"
        onChange={onhandleSearch}
        value={searchTerm}
      />
    </form>
  );
};

export default SearchForm;
