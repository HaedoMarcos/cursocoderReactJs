import "./style.css";

const ItemListContainer = ({ router, handleConsole }) => {
  return (
    <div className="container">
      {router.map((ruta) => (
        <p key={ruta}>{ruta}</p>
      ))}
    </div>
  );
};

export default ItemListContainer;
