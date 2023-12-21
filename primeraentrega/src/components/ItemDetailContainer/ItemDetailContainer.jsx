import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    useEffect(() => {
        mFetch
        .then((result) => {
            const productoEncontrado = result.find( (prod) => prod.id === "3" )
            setProducto(productoEncontrado)
        })

    }, [])

  return (
    <div>
      <ItemDetail producto= {producto} />
    </div>
  )
}

export default ItemDetailContainer