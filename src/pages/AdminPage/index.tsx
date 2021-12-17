import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { ItemsList } from '../../components/Layout/ItemsList';
import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks/useItems';



const AdminPage: FC =()=>{ 

    const { data, setPage} = useItems();


    return (  
        <Layout page ='Admin'>
            <ItemsList items={data} setPage={setPage}/>
        </Layout>
    )
}
export default WithAuth (AdminPage);
