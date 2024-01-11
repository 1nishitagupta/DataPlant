import SearchIcon from "@mui/icons-material/Search";

function SearchComponent() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded py-2 px-3 pr-10"
      />
      <span className="absolute right-3 top-2">
        <SearchIcon />
      </span>
    </div>
  );
}

export default SearchComponent;
