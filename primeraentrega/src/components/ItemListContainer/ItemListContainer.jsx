import { useEffect, useState } from "react"
import { mFetch } from "../../help/mFetch"
import ItemList from "../ItemList/ItemList"

export const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState ([])
  useEffect(()  => {
    mFetch()
    .then ( result => setProductos (result))
    .catch(err=> console.log(err) )
  }, [])

 return (
<div>
<ItemList productos={productos} />
</div>
 )
 }




