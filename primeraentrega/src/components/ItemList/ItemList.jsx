import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
        <div>
            <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center"
    }}>
        {
          productos.map( (producto ) => (
            <Item producto={producto} key={producto.id} />
           ))
}
  </div> 
  </div>  
  )
}

export default ItemList