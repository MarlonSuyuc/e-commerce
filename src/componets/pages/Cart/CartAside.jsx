import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeAllCart,
  removeOneProduct,
} from '../../../features/cart/cartSlice'

function CartAside() {
  const [totalPagar, setTotalPagar] = useState(0)
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.cart)

  const handleRemoveOneProduct = (id) => {
    // console.log(id);
    const product = productList.find((product) => product.id === id)
    dispatch(removeOneProduct(product.id))
  }

  const handletotalPagar = () => {
    const totalPagarProduct = productList.reduce((accumulator, nextElement) => {
      let totalPorProducto = nextElement.precio * nextElement.cantidad
      accumulator = accumulator + totalPorProducto
      return accumulator
    }, 0)
    setTotalPagar(totalPagarProduct)
  }

  useEffect(() => {
    handletotalPagar()
  }, [handletotalPagar])

  const hadleFinalizoCompra = () => {
    alert('Compra realizada con Exito')
    dispatch(removeAllCart(productList))
  }

  return (
    <aside className='mx-auto w-10/12 min-h-screen py-12'>
      <div className='relative inline-block'>
        <h2 className='text-4xl font-extrabold text-black'>Cart</h2>
        {productList.length ? (
          <span className='absolute -top-8 -right-8 bg-red-600 text-2xl text-white rounded-full w-10 h-10 text-center leading-relaxed'>
            {productList.length}
          </span>
        ) : (
          ''
        )}
      </div>
      <table className='bg-gray-50 w-full mt-5 border border-gray-400 table-fixed'>
        <thead>
          <tr>
            <th className='border border-gray-400'>Imagen</th>
            <th className='border border-gray-400'>Nombre</th>
            <th className='border border-gray-400'>
              Cantidad | precio | Total
            </th>
            <th className='border border-gray-400'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productList.length >= 1 ? (
            productList.map(({ id, name, cantidad, precio, imagen }) => (
              <tr key={id} className='text-center'>
                <td className='border-b border-gray-400  flex justify-center py-4'>
                  <figure className='w-20 '>
                    <img src={imagen} className='object-cover' alt={name} />
                  </figure>
                </td>
                <td className='border border-gray-400 '>{name}</td>
                <td className='border border-gray-400 '>{`${cantidad} * ${precio} = ${
                  cantidad * precio
                }`}</td>
                <td className='border border-gray-400 '>
                  <button
                    className='bg-red-600 text-white hover:bg-red-500 rounded px-5 py-2 font-medium'
                    onClick={() => handleRemoveOneProduct(id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className='text-2xl text-center font-bold'>
              <th colSpan='4' className='py-4'>
                No hay productos en el carrito
              </th>
            </tr>
          )}
        </tbody>
      </table>
      {productList.length >= 1 ? (
        <>
          <h4 className='text-right font-bold text-2xl pt-4'>
            Total de la compra:
            <span className='text-red-600 text-3xl font-extrabold'>
              {' '}
              Q {totalPagar}.00
            </span>
          </h4>
          <div className='mt-5 flex justify-center items-center gap-2'>
            <button
              onClick={() => dispatch(removeAllCart(productList))}
              className='bg-red-600 hover:bg-red-500 text-white rounded-lg w-2/12 py-3 font-medium'
            >
              Limpiar Carrito
            </button>
            <button
              onClick={hadleFinalizoCompra}
              className='bg-blue-700 hover:bg-blue-600 text-white  rounded-lg w-2/12 py-3 font-medium'
            >
              Finalizar compra
            </button>
          </div>
        </>
      ) : (
        ''
      )}
      <section></section>
    </aside>
  )
}
export default CartAside
