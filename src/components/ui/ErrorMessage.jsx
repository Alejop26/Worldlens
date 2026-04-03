export default function ErrorMessage({ message }) {
  return (
    <div className="error-box">
      <div className="error-title">Error al cargar datos</div>
      <div className="error-msg">{message}</div>
      <div className="error-hint">
        Verifica tu conexión a internet e intenta recargar la página.
      </div>
    </div>
  );
}
