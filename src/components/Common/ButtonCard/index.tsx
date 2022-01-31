import { FC } from "react";
import { Operation } from "../../../types";



import './styles.scss';


type Props={
  itemExists: boolean
  itemWatched: boolean
  isAdmin: boolean
  handleClick: (op: Operation) => void
}


const ButtonCard:FC <Props> = ({itemExists, itemWatched, isAdmin, handleClick}) =>{

  return (

          <div>
            {isAdmin ?
              <button
                className={'toggle--button ' + (itemExists? 'toggle--add' : 'toggle--delete')}
                onClick={() => itemExists ? handleClick('delete') : handleClick('add') }
              >
                {itemExists? 'Delete' : 'Add'}

              </button> 
              :
              <button
                className={'toggle--button ' + (itemWatched? 'toggle--watched' : 'toggle--unwatched')}
                onClick={()=> itemWatched? handleClick('watched') : handleClick('unwatched')}
              >
                {itemWatched? 'Watched' : 'Not Watched'}
              </button>
            }
          </div>           
  );
};

export { ButtonCard };


