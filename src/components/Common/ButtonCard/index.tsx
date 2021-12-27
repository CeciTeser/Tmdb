import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useItems } from "../../../hooks";
import { processAddItems, processDeleteItems } from "../../../redux/actions/AddDeleteItems";
import { Item, User } from "../../../types";



import './styles.scss';


type Props={
    item:Item,
}

type CurrentUserStore = {
  
      currentUser: User[];
      loading?: boolean;
      error?: string;
  
};

const ButtonCard:FC <Props> = ({item}) =>{

  const { itemsListFB, addItems, deleteItems } = useItems()

  const itemSelected = itemsListFB.items?.find(element => element.id=== item.id)

  const value = itemSelected? true : false 

 const [selected , setSelected] = useState(value)

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

              </button> :
              <button>User</button>
              }
          </div>           
  );
};

export { ButtonCard };


