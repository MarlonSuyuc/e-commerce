import { MdOutlineAdd } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../features/cart/cartSlice'

const CarProducto = ({ product }) => {
  const dispatch = useDispatch()
  const { id, name, precio, imagen } = product

  const handleAddProduct = (product) => {
    dispatch(addCart(product))
  }

  return (
    <article className='relative  w-72 h-72 outline outline-2 outline-gray-300 overflow-hidden flex justify-between flex-col p-2 items-center'>
      <ul className='absolute top-2 right-2 flex flex-col gap-4'>
        <li
          className='cursor-pointer p-1 outline outline-2 outline-gray-200 hover:text-white hover:bg-black'
          title='Añadir al carrito'
        >
          <MdOutlineAdd onClick={(e) => handleAddProduct(product)} size={22} />
        </li>
        <li
          className='cursor-pointer  p-1 outline outline-2 outline-gray-200 hover:text-white hover:bg-black'
          title='ver detalle'
        >
          <Link to={`/product/${id}`}>
            <IoMdEye size={22} />
          </Link>
        </li>
      </ul>
      <figure className='h-3/4 w-3/4'>
        <img src={imagen} alt={name} className='w-full h-full object-contain' />
      </figure>
      <span>{name}</span> <span> Q{precio}.00</span>
    </article>
  )
}

export default CarProducto
