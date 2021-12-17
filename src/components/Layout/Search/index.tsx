import { FC } from "react";

// type Props = {

//   handleChange: (newQuery: string) => void;
// };

const Search: FC = () => {
  return (
    <div className="mb-5 mt-5 d-flex align-items-center">
                <p className="text-black me-4">SEARCH</p>
                <input 
                type="text" 
                className="form-control"
                // onChange={(e) => handleChange(e.target.value)} 
                />
                <span className="ms-4"><i className="fab fa-searchengin "></i></span>
            </div>
  );
};

export { Search };
