const productos = [
    { id: "1", titulo: "EL PSICOANALISTA", autor: "John K.", genero: "Ficción", imgUrl: "https://f.fcdn.app/imgs/592511/grupolibros.com.uy/gli/0258/original/catalogo/978987780263497898778026341/1920-1200/el-psicoanalista-el-psicoanalista.jpg", categoria: "juveniles" },
    { id: "2", titulo: "EL LABERINTO DE ESPIRITUS", autor: "Carlos R.", genero: "Suspenso", imgUrl: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/244/m_libros/portada_el-laberinto-de-los-espiritus_carlos-ruiz-zafon_201611161423.jpg", categoria: "juveniles" },
    { id: "3", titulo: "EL TIEMPO DE COSTURAS", autor: "Maria D.", genero: "Romance", imgUrl: " https://www.planetadelibros.com.ar/usuaris/libros/fotos/48/m_libros/47876_portada_el-tiempo-entre-costuras_maria-duenas_201802221218.jpg", categoria: "adultos" },
    { id: "4", titulo: "CORTE ROSAS Y ESPINAS", autor: "Sarah J.", genero: "Romance", imgUrl: " https://www.planetadelibros.com.uy/usuaris/libros/fotos/211/m_libros/210689_portada_una-corte-de-rosas-y-espinas_sarah-maas_201510291930.jpg", categoria: "adultos" },
    { id: "5", titulo: "DREAMLAND", autor: "Nicolas S.", genero: "Novela", imgUrl: " https://nicholassparks.com/wp-content/uploads/2022/07/9780593677933-Dreamland.jpg", categoria: "adultos" },
    { id: "6", titulo: "LA SOMBRA DEL VIENTO", autor: "Carlos R.", genero: "Novela", imgUrl: " https://www.planetadelibros.com.uy/usuaris/libros/fotos/48/m_libros/47856_portada___201609051317.jpg", categoria: "juveniles" }
]

const mFetch = (titulo) => new Promise((resuelto, rechazado) => {
    setTimeout(() => {
        resuelto(productos)
    }, 1000)
});

export default mFetch