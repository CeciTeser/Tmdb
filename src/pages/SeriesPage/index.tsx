import { FC } from 'react';

import { WithAuth } from '../../hoc';
import { useItems } from '../../hooks';

import { ItemsList, Layout } from '../../components/Layout';



const SeriesPage:FC =()=>{ 

    const { itemsListFB } = useItems()

    const series = itemsListFB.items.filter(item => item.media_type === 'tv'); 

    return (  
        <Layout page ='Series'>

            <ItemsList items={series}/>

        </Layout>
    )
}
export default WithAuth (SeriesPage);


