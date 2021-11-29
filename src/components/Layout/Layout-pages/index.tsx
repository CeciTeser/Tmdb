import { FC } from 'react';
import { Footer } from '../../Common';
import { Header } from '../../Common';
import { Main } from '../Main';

type Props={
    page?:string,
    hideNav?:boolean, 
    hideFooter?:boolean,
}
const Layout:FC < Props >= ({children , page, hideNav, hideFooter})=> {

    return (
        <>
            <Header hideNav={hideNav}/> 

            <Main className = {page} >
            {children}
            </Main>
            {!hideFooter &&  <Footer />} 

        </>
    )

};

export { Layout };