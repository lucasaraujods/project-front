import { useContext } from "react";
import { BookAuthorContext } from "../context/BookAuthorContext";

/**
 * Componente que exibe a tabela de livros
 * @returns {JSX.Element}
 */
export const BookTable = () => {
  const context = useContext(BookAuthorContext);
  if (!context) return null;
  const { books, removeBook } = context;

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Páginas</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.name}</td>
            <td>{book.pages || "N/A"}</td>
            <td>
              <button onClick={() => removeBook(book.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
