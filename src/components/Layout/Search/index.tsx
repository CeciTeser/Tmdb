import { FC } from "react";

import { useItems } from "../../../hooks/useItems";

import lens from '../../../assets/img/Lens.svg'


import './styles.scss';


const Search: FC = () => {

  const {setSearch } = useItems();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
    setSearch(event.target.value)
  }

  return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="mb-5 mt-5 d-flex align-items-center search-style">
            <p className="text-black search-text me-4">SEARCH</p>
            <input 
              type="text" 
              className="form-control"
              onChange={handleChange} 
            />
            <img className="ms-4" src={lens} alt="lens" />
        </div>
      </div>
  );
};

export { Search };
