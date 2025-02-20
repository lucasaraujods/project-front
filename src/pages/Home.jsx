import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao CRUD de Livros e Autores</h1>
      <nav>
        <ul>
          <li><Link to="/livros">Gerenciar Livros</Link></li>
          <li><Link to="/autores">Gerenciar Autores</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
