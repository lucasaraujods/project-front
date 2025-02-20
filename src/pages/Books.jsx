import React, { useState } from "react";
import Tabela from "../components/Tabela";

function Books() {
  const [livros, setLivros] = useState([
    { id: 1, name: "Livro Teste", author_id: "7", pages: 150 },
  ]);

  return (
    <div>
      <h1>Gerenciar Livros 📚</h1>
      <Tabela 
        dados={livros} 
        colunas={["ID", "Nome", "Autor ID", "Páginas"]} 
        onEdit={(livro) => console.log("Editar", livro)}
        onDelete={(id) => console.log("Excluir livro", id)}
      />
    </div>
  );
}

export default Books;

