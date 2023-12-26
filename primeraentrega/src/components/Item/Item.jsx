import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
    < div className="card w-25">
                              <div className="card-body p-5 text-center">
                                  <img src={producto.imgUrl} className=" card-img-top w-50" alt="image" />
                                  <h6>{producto.titulo}</h6>
                                  <p> Autor: {producto.autor}</p>
                                  <p>{producto.genero}</p>
                                  <Link to={`/detalle/${producto.id}`} className= "link">
                                    Ver más
                                    </Link>
                                  </div>
      </div> 
                              
  );
};

export default Item;
