import LupaIcon from "../../common/icons/LupaIcon";
import "../../styles/alunos.css";

const SearchBar = ({ value, onChange, placeholder = "Buscar..." }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />
      <div className="search-icon">
        <LupaIcon />
      </div>
    </div>
  );
};

export default SearchBar;
