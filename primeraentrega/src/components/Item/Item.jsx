const Item = ({producto}) => {
  return (
    < div className=" card w-25">
                              <div className="card-body p-0 text-center">
                                  <img src={producto.imgUrl} className=" card-img-top w-50" alt="image" />
                                  <h6>{producto.titulo}</h6>
                                  <p> Autor: {producto.autor}</p>
                                  <p>{producto.genero}</p>
                                  </div>
                                  <div className="card-footer">
                                  <button className="btn btn-outline-dark w-30 text-center">Leer más</button>
                                  </div>
                                </div>
  );
};

export default Item;
