import { FC } from "react";
import logoColor from '../../../assets/img/LogoColor.svg'

import './styles.scss';


const Logo: FC  = () => {
  return (
    <>
    
      <img src={logoColor} alt="logo" />

    </>
  );
};

export { Logo };
