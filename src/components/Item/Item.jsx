import { Link } from "react-router-dom";
export const Item = ({ id, marca, modelo, precio, img, estado }) => {
  return (
    <div>
      <img style={{ width: "200px", height: "120px" }} src={img} />
      <h1>{modelo}</h1>
      <h2>{marca}</h2>
      <p>{estado}</p>
      <p>{precio}</p>
      <Link to={`/product/${id}`}>Ver detalle</Link>
    </div>
  );
};
