import { Link } from 'react-router-dom'
import {
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
  MdMenu,
  MdOutlineClose,
} from 'react-icons/md'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { productList } = useSelector((state) => state.cart)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='z-10 shadow-md font-medium bg-white sticky left-0 top-0 '>
      <div className='flex justify-between items-center h-16  mx-auto w-10/12 max-w-[1240px]'>
        {/* nav-Desktop */}
        {/* nav left */}
        <div className='flex justify-between w-full items-center md:block'>
          <Link
            to='/'
            className='text-xl md:text-2xl lg:text-3xl font-extrabold uppercase'
          >
            marlos'tore
          </Link>
          <div onClick={handleNav}>
            {nav ? (
              <MdOutlineClose
                className='block md:hidden'
                cursor='pointer'
                size={25}
              />
            ) : (
              <section className='flex gap-4'>
                <div className='relative md:hidden'>
                  <Link to='/cart'>
                    <MdOutlineShoppingCart
                      size={20}
                      className='cursor-pointer'
                    />
                  </Link>
                  {productList.length ? (
                    <span className='absolute -top-4 -right-4 bg-red-600 text-xs text-white rounded-full w-5 h-5 text-center flex justify-center items-center'>
                      {productList.length}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
                <MdMenu
                  className='block md:hidden'
                  cursor='pointer'
                  size={25}
                />
              </section>
            )}
          </div>
        </div>
        {/* nav right */}
        <div className='hidden md:flex'>
          <ul className='flex gap-6 items-center'>
            <li className='hover:bg-gray-100'>
              <Link to='/' className='hover:text-blue-700 p-1'>
                Inicio
              </Link>
            </li>
            <li className='hover:bg-gray-100'>
              <Link to='category' className=' hover:text-blue-700 p-1'>
                Categorias
              </Link>
            </li>
            <li className='hover:bg-gray-100'>
              <Link to='contact' className=' hover:text-blue-700 p-1'>
                Contacto
              </Link>
            </li>
            <li>
              <MdOutlineFavoriteBorder size={20} className=' cursor-pointer' />
            </li>
            <li className='relative'>
              <Link to='/cart'>
                <MdOutlineShoppingCart size={20} className=' cursor-pointer' />
              </Link>
              {productList.length ? (
                <span className='absolute -top-4 -right-4 bg-red-600 text-xs text-white rounded-full w-5 h-5 text-center flex justify-center items-center'>
                  {productList.length}
                </span>
              ) : (
                ''
              )}
            </li>
          </ul>
        </div>
        {/* ------------------------------ */}

        {/* nav mobile */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000'
              : 'ease-in-out duration-1000 fixed left-[-100%]'
          }
        >
          <ul className='text-white'>
            <li className='p-4 border-b border-gray-600'>
              <Link
                to='/'
                className='hover:text-blue-700 inline-block w-full'
                onClick={() => setNav(false)}
              >
                Inicio
              </Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <Link
                to='category'
                className=' hover:text-blue-700 inline-block w-full'
                onClick={() => setNav(false)}
              >
                Categorias
              </Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <Link
                to='contact'
                className=' hover:text-blue-700 inline-block w-full'
                onClick={() => setNav(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        {/* ------------------------------ */}
      </div>
    </div>
  )
}

export default Navbar
