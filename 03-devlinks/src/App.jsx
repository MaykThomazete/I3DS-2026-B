
import './App.css';
import Link from './components/Link/Link';
import Perfil from './components/Perfil/Perfil';
import SocialLink from './components/Perfil/SocialLink/SocialLink';
import Rodape from './components/Rodape/Rodape';



function App() {
  return (
     <div id='App'>
      <Perfil fotoPerfil={"https://placehold.co/100"} >Mayk Thomazete</Perfil>

      
      
      
      
      <div clasName="switch">botão switch </div>

      <ul>
        <Link url={""}>Inscreva-se</Link>
         <Link url={""}>Minha playlist</Link>
          <Link url={""}>Me pague um café!</Link>
           <Link url={""}>Conheça o Curso DEV</Link>
      </ul>
      <div className="socialLinks">
       
        <SocialLink url={"https://github.com"} icon={"logo-github"} />
         <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
          <SocialLink url={"https://youtube.com"} icon={"logo-youtube"} />
           <SocialLink url={"https://linkedin.com"} icon={"logo-linkedin"} />
      </div>
      
<Rodape>MaykThomazete</Rodape>
</div>
  );
};
     

   
   export default App

