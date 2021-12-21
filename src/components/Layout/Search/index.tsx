import { FC } from "react";
import { useItems } from "../../../hooks/useItems";


const Search: FC = () => {

  const {setSearch } = useItems();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
    setSearch(event.target.value)
  }

  return (
    <div className="mb-5 mt-5 d-flex align-items-center">
                <p className="text-black me-4">SEARCH</p>
                <input 
                type="text" 
                className="form-control"
                onChange={handleChange} 
                />
                <span className="ms-4"><i className="fab fa-searchengin "></i></span>
            </div>
  );
};

export { Search };
