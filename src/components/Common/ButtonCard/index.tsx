import { FC } from "react";
import { useDispatch } from "react-redux";
import { useItems } from "../../../hooks";
import { processAddItems, processDeleteItems } from "../../../redux/actions/AddDeleteItems";
import { Item } from "../../../types";



import './styles.scss';


type Props={
    item:Item,
}

const ButtonCard:FC <Props> = ({item}) =>{

  const dispatch = useDispatch()

  const {data, itemsListFB} = useItems()

  const itemSelected = data.results.find (element => element.id=== item.id)

  const itemSelectedFB=itemsListFB.items?.find(element => element.id=== item.id)

  const userRole=  localStorage.getItem('role')
  

  return (
    
                     <div>
                        <button onClick={() => dispatch (processAddItems(itemSelected))}> Add </button>
                        <button onClick={() => console.log(dispatch (processDeleteItems(itemSelectedFB?.idDB)))}> Delete </button>

                
                      </div>

                      
                
  );
};

export { ButtonCard };


