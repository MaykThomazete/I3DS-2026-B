
import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/devflix.png"
import lupa from "./assets/search.svg"
import Rodape from "./components/rodape/Rodape";

const App = () => {
  const {movie, setMovies} = useState([]);
  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

//Criando a conexão com a API e trazendo informações
const searchMovies = async (title) => {
  const Response = await fetch(`${apiUrl}&s=${title}`);
  const data = await Response.json;

  //Alimentando a variavel movies
  setMovies(data.Search);
};

useEffect( () => {
  searchMovies("Batman")
})

  return (
    <div id="App">
      <img className="logo" src={logo} alt="Logotipo da plataforma de streaming Devflix em destaque, com letras vermelhas e pretas, promovendo conteúdo diversificado em streaming." />


      <div className="search">
        <input
          type="text"
          placeholder="pesquise por filmes e séries..."
        />
        <img src={lupa} alt="Botão de ação para pesquisa!" />

</div>



<div className="container"></div>


      <Rodape link={"https://github.com/MaykThomazete"}>MaykThomazete</Rodape>
    </div>
  );
};




export default App
