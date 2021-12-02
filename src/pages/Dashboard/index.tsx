import { FC } from 'react';
import { Layout } from '../../components';
import { WithAuth } from '../../hoc';



const Dashboard:FC =()=>{

    return (  
        <Layout page ='Dashboard'>

        </Layout>
    )
}
export default WithAuth(Dashboard);