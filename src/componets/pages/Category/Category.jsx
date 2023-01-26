import { useState } from 'react'
import { DATA } from '../../../Data'
import CarProducto from '../../cards/CarProducto'

const Category = () => {
  const [Data, setData] = useState(DATA)

  return (
    <div className='mx-auto w-10/12 py-14'>
      <h2 className='pb-3 text-center text-4xl font-bold mb-12 border-b border-gray-300'>
        Nuevos Productos
      </h2>
      <section className='flex justify-center gap-3'>
        <button
          onClick={() => setData(DATA)}
          className='outline outline-1 outline-gray-400 py-1 px-4 rounded-sm hover:bg-black hover:text-white'
        >
          Todo
        </button>
        <button
          onClick={() => setData(DATA.filter((x) => x.categoria === 'mujer'))}
          className='outline outline-1 outline-gray-400 py-1 px-4 rounded-sm hover:bg-black hover:text-white'
        >
          Mujer
        </button>
        <button
          onClick={() => setData(DATA.filter((x) => x.categoria === 'hombre'))}
          className='outline outline-1 outline-gray-400 py-1 px-4 rounded-sm hover:bg-black hover:text-white'
        >
          Hombre
        </button>
        <button
          onClick={() =>
            setData(DATA.filter((x) => x.categoria === 'accesorios'))
          }
          className='outline outline-1 outline-gray-400 py-1 px-4 rounded-sm hover:bg-black hover:text-white'
        >
          Accesorios
        </button>
      </section>
      <section className='w-full mt-8 flex flex-wrap justify-center xl:justify-between content-center gap-6'>
        {Data.map((product) => (
          <CarProducto key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default Category
