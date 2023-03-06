
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAp32rpVF-BqojnZKQWOmS27n2Y_zMdE0Q",
  authDomain: "dixer-gaming.firebaseapp.com",
  projectId: "dixer-gaming",
  storageBucket: "dixer-gaming.appspot.com",
  messagingSenderId: "621602467249",
  appId: "1:621602467249:web:d120b2a17ecd4188f2e190"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore()

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(db, "productos"), { 
          idCategoria: prod.idCategoria,
          categoria: prod.categoria,
          subCategoria: prod.subCategoria || null,
          idSubCategoria: prod.idSubCategoria || null,
          nombre: prod.nombre,
          marca: prod.marca,
          modelo: prod.modelo,
          precio: prod.precio,
          stock: prod.stock,
          img: prod.img,
          img2: prod.img2,
          descripcion: prod.descripcion
      })
  })


}
export const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => {
    return { ...prod.data(), id: prod.id }
  })
  
  console.log(items)
  return items
}

export const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = { ...producto.data(), id: producto.id }
  return item
}

export const updateProducto = async (id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const oC = await getDoc(doc(db, "ordenesCompra", id))
  const ordenCompra = { ...oC.data(), id: oC.id }
  return ordenCompra
}
