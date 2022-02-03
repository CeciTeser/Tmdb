import { FC } from 'react';

import { Pagination } from '../../components/Common/Pagination';
import { Layout } from '../../components/Layout';
import { ItemsList } from '../../components/Layout/ItemsList';
import { Search } from '../../components/Layout/Search';

import { WithAuth } from '../../hoc';

import { useItems } from '../../hooks/useItems';



const AdminPage: FC =()=>{ 

    const { data } = useItems();

    return (  
        <Layout page ='Admin'>
            <Search/>
            <ItemsList items={data.results}/>
            <Pagination/>
        </Layout>
    )
}
export default WithAuth (AdminPage);
