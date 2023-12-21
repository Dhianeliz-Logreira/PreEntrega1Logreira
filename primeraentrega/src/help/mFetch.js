const products = [
    { id: "1", titulo: "EL PSICOANALISTA", autor: "John K.", genero: "Ficción", imgUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/e9/42/e9425872707c7c118fd21549fa33908c.jpg" },
    { id: "2", titulo: "EL LABERINTO DE ESPIRITUS", autor: "Carlos R.", genero: "Suspenso", imgUrl: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/244/m_libros/portada_el-laberinto-de-los-espiritus_carlos-ruiz-zafon_201611161423.jpg" },
    { id: "3", titulo: "EL EL TIEMPO DE COSTURAS", autor: "Maria D.", genero: "Romance", imgUrl: " https://www.planetadelibros.com.ar/usuaris/libros/fotos/48/m_libros/47876_portada_el-tiempo-entre-costuras_maria-duenas_201802221218.jpg" }
]

export const mFetch = (titulo) => new Promise((resuelto, rechazado) => {
    setTimeout(() => {
        resuelto(products)
    }, 2000)
})