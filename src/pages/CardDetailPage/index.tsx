import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { CardDetail } from '../../components/Layout/CardDetail';
import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks';



const CardDetailPage: FC =()=>{ 

const { itemsListFB } = useItems()

    return (  
        <Layout page ='DetailCard'>
           <CardDetail items={itemsListFB.items}/>
        </Layout>
    )
}
export default WithAuth (CardDetailPage);
