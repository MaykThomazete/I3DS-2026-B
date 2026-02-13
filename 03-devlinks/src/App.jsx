
import './App.css';
import Link from './components/Link/Link';
import Perfil from './components/Perfil/Perfil';
import SocialLink from './components/SocialLink/SocialLink';
import Rodape from './components/Rodape/Rodape';
import Switch from './components/Switch/Switch';
import { useState } from 'react';



function App() {
const[isLight,setIsLight] = useState(true)

const troca = () => {
  setIsLight(isLight);
};

  return (
     <div id='App' className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={"https://placehold.co/100"} >Mayk Thomazete</Perfil>

      <Switch troca={troca} isLight={isLight} >

      </Switch>
      
      
      
      
    

      <ul>
        <Link url={""}>Inscreva-se</Link>
         <Link url={""}>Minha playlist</Link>
          <Link url={""}>Me pague um café!</Link>
           <Link url={""}>Conheça o Curso DEV</Link>
      </ul>
      <div id="SocialLink">
       
        <SocialLink url={"https://github.com"} icon={"logo-github"} />
         <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
          <SocialLink url={"https://youtube.com"} icon={"logo-youtube"} />
           <SocialLink url={"https://linkedin.com"} icon={"logo-linkedin"} />
      </div>
      
<Rodape>Mayk Thomazete</Rodape>
</div>
  );
};
     

   
   export default App

