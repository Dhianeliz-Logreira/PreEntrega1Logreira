import { useEffect, useState } from "react"
import mFetch from "../../help/mFetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
const{ id } = useParams()

useEffect (()=> {
    mFetch()
    .then((result)=> {
    const productoEncontrado = result.find( (prod)=>prod.id === id )
    setProducto(productoEncontrado)
    })
  
}, [] );

  return (
    <div>
    <ItemDetail producto = {producto} />
    </div>
  )
}

export default ItemDetailContainer

