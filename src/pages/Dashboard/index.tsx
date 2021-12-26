import { FC } from 'react';
import { Layout } from '../../components';
import { ItemsList } from '../../components/Layout';
import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks';



const Dashboard:FC =()=>{

    const { itemsListFB } = useItems()

    return (  
        <Layout page ='Dashboard'>
              <ItemsList items={itemsListFB.items}/>
        </Layout>
    )
}
export default WithAuth(Dashboard);