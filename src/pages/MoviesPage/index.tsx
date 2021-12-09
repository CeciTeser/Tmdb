import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { Movies } from '../../components/Layout/Movies';
import { WithAuth } from '../../hoc';



const MoviesPage:FC =()=>{ 

    return (  
        <Layout page ='Movies'>
            <Movies/>
        </Layout>
    )
}
export default WithAuth (MoviesPage);
