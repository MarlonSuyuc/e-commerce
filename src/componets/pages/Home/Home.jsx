import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../Category/Category'
import imgHome from '../../../assets/home_img.png'

const Home = () => {
  return (
    <div className=''>
      <header className='m-auto w-full md:w-11/12 lg:w-10/12 h-[calc(100vh-4rem)] overflow-hidden flex justify-center md:justify-between items-center'>
        <div className='w-7/12 '>
          <h1 className='text-4xl md:text-5xl font-extrabold uppercase mb-6 text-zinc-900'>
            Encuentra lo que buscas con nosotros
          </h1>
          <p className='text-gray-700 mb-6 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            voluptatem repellendus vel laborum ut incidunt doloribus harum,
            rerum adipisci exercitationem veniam. Placeat a nemo quisquam
            tenetur quia id totam voluptatibus!
          </p>
          <Link
            to='category'
            className='bg-blue-700 rounded-lg px-8 py-3 font-bold text-white hover:bg-blue-600'
          >
            Compra ahora
          </Link>
        </div>
        <img
          src={imgHome}
          alt='img-header'
          className='hidden md:inline-block'
        />
      </header>
      <Category />
    </div>
  )
}

export default Home
