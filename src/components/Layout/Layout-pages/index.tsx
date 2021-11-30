import { FC } from 'react';
import { Header } from '../../Common';
import { Main } from '../Main';

type Props={
    page?:string,
    hideNav?:boolean, 
}
const Layout:FC < Props >= ({children , page, hideNav})=> {

    return (
        <>
            <Header hideNav={hideNav}/> 

            <Main className = {page} >
            {children}
            </Main>
        </>
    )

};

export { Layout };