const ItemDetail = ({ producto }) => {
    return (
        <div>
            <img src={producto.imgUrl} alt="" />
            <h6>{producto.titulo}</h6>
            <p> Autor: {producto.autor}</p>
            <p>{producto.genero}</p>
        </div>
    )
}

export default ItemDetail