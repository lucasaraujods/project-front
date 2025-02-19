import React from "react";
import { useForm } from "react-hook-form";

/**
 * Formulário para criar ou editar um livro.
 * @param {Function} onSubmit - Função chamada ao enviar o formulário.
 * @param {Object} livro - Dados do livro para edição (opcional).
 */
function FormularioLivro({ onSubmit, livro }) {
  const { register, handleSubmit } = useForm({
    defaultValues: livro || { name: "", author_id: "", pages: "" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome do Livro:</label>
      <input {...register("name", { required: true })} />

      <label>ID do Autor:</label>
      <input {...register("author_id", { required: true })} />

      <label>Páginas:</label>
      <input type="number" {...register("pages")} />

      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormularioLivro;
