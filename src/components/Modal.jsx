import React from "react";

/**
 * Componente de modal reutilizável.
 * @param {boolean} aberto - Define se o modal está visível.
 * @param {Function} fechar - Função para fechar o modal.
 * @param {JSX.Element} children - Conteúdo dentro do modal (formulários).
 */
function Modal({ aberto, fechar, children }) {
  if (!aberto) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button onClick={fechar} style={styles.botaoFechar}>
          ❌ Fechar
        </button>
      </div>
    </div>
  );
}

// Estilos inline para o modal
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  },
  botaoFechar: {
    marginTop: "10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px",
    cursor: "pointer",
  },
};

export default Modal;
