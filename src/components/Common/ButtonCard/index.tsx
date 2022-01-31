import { FC, useState } from "react";
import { useAuth, useItems } from "../../../hooks";
import { Item, Operation, User } from "../../../types";



import './styles.scss';


type Props={
  itemExists: boolean
  itemWatched: boolean
  isAdmin: boolean
  handleClick: (op: Operation) => void
}


const ButtonCard:FC <Props> = ({itemExists, itemWatched, isAdmin, handleClick}) =>{

  // const { itemsListFB, addItems, deleteItems, watchedItems, notWatchedItems} = useItems()

  // const {currentUser} = useAuth()

  // const itemSelected = itemsListFB.items?.find(element => element.id=== item.id)

  // const value = itemSelected? true : false 
  
  // const [selected , setSelected] = useState(value)

  // const itemWatched = currentUser.watched?.includes(item.id)

  // const userRole=  localStorage.getItem('role')

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


