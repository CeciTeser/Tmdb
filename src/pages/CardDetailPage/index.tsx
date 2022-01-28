import { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { CardDetail } from '../../components/Layout/CardDetail';
import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks';



const CardDetailPage: FC =()=>{ 

const {goBack} = useHistory()

const {idItem} = useParams<{idItem:string}>()

const { itemsListFB } = useItems()

    return (  
        <Layout page ='DetailCard'>
           <CardDetail items={itemsListFB.items}/>
            <button onClick={goBack}>GO BACK</button>
        </Layout>
    )
}
export default WithAuth (CardDetailPage);
