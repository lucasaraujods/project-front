import { createContext, useState } from "react";

/**
 * Contexto para gerenciar livros e autores no estado global.
 */
export const BookAuthorContext = createContext();

/**
 * Provedor do contexto para livros e autores.
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Componentes filhos.
 */
export function BookAuthorProvider({ children }) {
  const [livros, setLivros] = useState([]);
  const [autores, setAutores] = useState([]);

  return (
    <BookAuthorContext.Provider value={{ livros, setLivros, autores, setAutores }}>
      {children}
    </BookAuthorContext.Provider>
  );
}

export default BookAuthorProvider;
