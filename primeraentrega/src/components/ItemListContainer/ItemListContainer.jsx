import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import mFetch from "../../help/mFetch"
import { useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)

  const { categoria } = useParams()
  console.log(categoria)

  useEffect(() => {
    mFetch()
      .then((result) => {
        if (categoria) {
          const productosFiltrados = result.filter((producto) => producto.categoria === categoria)
          setProductos(productosFiltrados)
        } else {
          setProductos(result)
        }
      })

      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setCargando(false);
      });
  }, [categoria]);



  return (
    <>
      {cargando ? (

        <DotLoader color="#a873dd" />
      ) : (
        <div>
          <ItemList productos={productos} />
        </div>

      )}
    </>
  )
}

export default ItemListContainer;

