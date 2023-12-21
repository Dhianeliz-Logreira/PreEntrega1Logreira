const ItemDetail = ({ producto }) => {
  return (
    <div>
        <img src={producto.imgUrl} alt="" />
        <p>{producto.titulo}</p>
        <p>{producto.genero}</p>
    </div>
  )
}

export default ItemDetail