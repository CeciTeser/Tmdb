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
                className={'toggle--button ' + (itemExists? 'toggle--delete' : 'toggle--add')}
                onClick={() => itemExists ? handleClick('delete') : handleClick('add') }
              >
                {itemExists? 'DELETE' : 'ADD'}

              </button> 
              :
              <button
                className={'toggle--button ' + (itemWatched? 'toggle--watched' : 'toggle--unwatched')}
                onClick={()=> itemWatched? handleClick('watched') : handleClick('unwatched')}
              >
                {itemWatched? 'WATCHED' : 'NOT WATCHED'}
              </button>
            }
          </div>           
  );
};

export { ButtonCard };


