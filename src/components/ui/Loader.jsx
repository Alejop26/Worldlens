export default function Loader({ message = 'Cargando...' }) {
  return (
    <div className="loader">
      <div className="spinner" />
      {message}
    </div>
  );
}
