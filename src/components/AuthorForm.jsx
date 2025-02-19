import React from "react";
import { useForm } from "react-hook-form";

/**
 * Formulário para criar ou editar um autor.
 * @param {Function} onSubmit - Função chamada ao enviar o formulário.
 * @param {Object} autor - Dados do autor para edição (opcional).
 */
function FormularioAutor({ onSubmit, autor }) {
  const { register, handleSubmit } = useForm({
    defaultValues: autor || { name: "", email: "" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome do Autor:</label>
      <input {...register("name", { required: true })} />

      <label>Email:</label>
      <input type="email" {...register("email")} />

      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormularioAutor;
