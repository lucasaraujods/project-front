import React from "react";

/**
 * Componente de tabela reutilizável para listar livros ou autores.
 * @param {Object[]} dados - Lista de livros ou autores.
 * @param {string[]} colunas - Cabeçalhos das colunas da tabela.
 * @param {Function} onEdit - Função chamada ao clicar no botão de editar.
 * @param {Function} onDelete - Função chamada ao clicar no botão de excluir.
 */
function Tabela({ dados, colunas, onEdit, onDelete }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          {colunas.map((coluna, index) => (
            <th key={index}>{coluna}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((valor, index) => (
              <td key={index}>{valor}</td>
            ))}
            <td>
              <button onClick={() => onEdit(item)}>✏️ Editar</button>
              <button onClick={() => onDelete(item.id)}>🗑️ Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
