import { FC } from "react";

import { useItems } from "../../../hooks/useItems";

import './styles.scss';


const Search: FC = () => {

  const {setSearch } = useItems();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
    setSearch(event.target.value)
  }

  return (
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="mb-5 mt-5 d-flex align-items-center search-style">
            <p className="text-black search-text me-4">SEARCH</p>
            <input 
              type="text" 
              className="form-control"
              onChange={handleChange} 
            />
            <span className="ms-4"><i className="fab fa-searchengin"></i></span>
        </div>
      </div>
  );
};

export { Search };
