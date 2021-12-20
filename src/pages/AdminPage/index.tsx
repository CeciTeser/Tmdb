import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { ItemsList } from '../../components/Layout/ItemsList';
import { Search } from '../../components/Layout/Search';
import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks/useItems';



const AdminPage: FC =()=>{ 

    const { data, setSearch } = useItems();


    return (  
        <Layout page ='Admin'>
            <Search/>
            <ItemsList items={data}/>
        </Layout>
    )
}
export default WithAuth (AdminPage);
