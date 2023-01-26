import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCart } from '../../../features/cart/cartSlice'
import { DATA } from '../../../Data'

const DetalleProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const productfind = DATA.find((item) => item.id === parseInt(id))
  const { name, imagen, descripcion, precio } = productfind

  const handleAddProductDetail = (productfind) => {
    dispatch(addCart(productfind))
  }

  if (!productfind) {
    return (
      <section className='min-h-screen grid place-content-center'>
        <h3 className=' text-5xl text-center font-extrabold'>
          Producto No Encontrado
        </h3>
      </section>
    )
  }
  return (
    <section className='min-h-screen flex justify-center items-center gap-8'>
      <figure className='w-60 h-60'>
        <img src={imagen} alt={name} className='w-full h-full object-cover' />
      </figure>
      <div className='w-[40%] flex flex-col gap-4'>
        <h3 className='font-bold text-3xl capitalize'>{name}</h3>
        <span className='text-red-700 font-bold text-xl'>Q {precio}.00</span>
        <p>{descripcion}</p>
        <button
          onClick={() => handleAddProductDetail(productfind)}
          className='outline outline-1 outline-gray-400 py-2 px-4 rounded-sm bg-black hover:bg-white hover:text-black text-white w-40 font-semibold cursor-pointer '
        >
          Añadir al carrito
        </button>
      </div>
    </section>
  )
}

export default DetalleProduct
