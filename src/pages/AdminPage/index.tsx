import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { Admin } from '../../components/Layout/Admin';
import { WithAuth } from '../../hoc';



const AdminPage:FC =()=>{ 

    return (  
        <Layout page ='Movies'>
            <Admin/>
        </Layout>
    )
}
export default WithAuth (AdminPage);
