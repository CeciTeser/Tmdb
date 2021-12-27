import { FC } from 'react';

import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks';

import { ItemsList, Layout } from '../../components/Layout';



const MoviesPage:FC =()=>{ 

    const { itemsListFB } = useItems()

    const movies = itemsListFB.items.filter(item => item.media_type === 'movie'); 

    return (  
        <Layout page ='movies'>

         <ItemsList items={movies}/>

        </Layout>
    )
}
export default WithAuth (MoviesPage);


