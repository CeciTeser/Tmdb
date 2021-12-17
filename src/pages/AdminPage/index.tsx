import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { ItemsList } from '../../components/Layout/ItemsList';
import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks/useItems';



const AdminPage: FC =()=>{ 

    const { data } = useItems();


    return (  
        <Layout page ='Admin'>
            <ItemsList items={data}/>
        </Layout>
    )
}
export default WithAuth (AdminPage);
