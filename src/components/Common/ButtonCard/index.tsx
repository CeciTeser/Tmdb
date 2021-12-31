import { FC, useState } from "react";
import { useAuth, useItems } from "../../../hooks";
import { unpatchUser } from "../../../redux/actions/currentUser";
import { Item } from "../../../types";



import './styles.scss';


type Props={
    item:Item,
  
}


const ButtonCard:FC <Props> = ({item}) =>{

  const { itemsListFB, addItems, deleteItems, watchedItems, notWatchedItems} = useItems()

  const {currentUser} = useAuth()

  const itemSelected = itemsListFB.items?.find(element => element.id=== item.id)

  const itemWatched = currentUser.watched?.includes(item.idDB)

  console.log('CU', currentUser.idDB) 
  console.log('itemWatched', itemWatched)
  console.log('itemSelected', itemSelected)
  


  const value = itemSelected? true : false 

 const [selected , setSelected] = useState(value)

 const [watchedOrNot , setwatchedOrNot] = useState(false)

  const userRole=  localStorage.getItem('role')


  return (

          <div>
            {(userRole === 'admin')?
              <button
                className={'toggle--button ' + (selected? 'toggle--add' : 'toggle--delete')}
                onClick={()=>{
                  setSelected(!selected)
                  !selected? addItems(itemSelected, item): deleteItems(itemSelected)

                }}
              >
                {selected? 'Delete' : 'Add'}

              </button> 
              :
              <button
              className={'toggle--button ' + (itemWatched? 'toggle--watched' : 'toggle--notwatched')}
              onClick={()=>{
                setwatchedOrNot(!watchedOrNot)
                !itemWatched? watchedItems(currentUser,  item) : notWatchedItems(currentUser, item)
              }}

              >

              {itemWatched? 'Not Watched' : 'Watched'}
              
              </button>

            }
          </div>           
  );
};

export { ButtonCard };


