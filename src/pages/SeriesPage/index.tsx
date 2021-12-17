import { FC } from 'react';
import { Layout } from '../../components/Layout';
// import { Series } from '../../components/Layout/Series';
import { WithAuth } from '../../hoc';



const SeriesPage:FC =()=>{ 

    return (  
        <Layout page ='Series'>
         
        </Layout>
    )
}
export default WithAuth (SeriesPage);
