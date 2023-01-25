import  {Search}  from "react-bootstrap-icons";
import "./styleSearchBar.css";

const SearchBar = ({onSubmit}) => {
  const submit = (e) =>{
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }
  return (
    <div className="divContainer">
    <Search size={30} className="icon"/>
    <input onKeyUp={submit} type="text" className="input" placeholder="Buscar tv show" />
    </div>
  )
}

export default SearchBar