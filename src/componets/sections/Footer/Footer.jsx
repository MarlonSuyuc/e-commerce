import { Link } from 'react-router-dom'

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer className='bg-slate-900'>
      <div className='w-10/12 m-auto flex justify-between pt-16 pb-16'>
        {/* left*/}
        <div>
          <Link
            to='/'
            className='inline-block mb-2 text-4xl font-extrabold uppercase text-white '
          >
            marlos'tore
          </Link>
          <div>
            <h3 className='text-white text-2xl font-semibold mb-7'>
              ¿Necesitas ayuda con algo?
            </h3>
            <p className=' text-gray-600 w-[600px] text-lg mb-4'>
              Reciba actualizaciones, ofertas especiales, tutoriales, descuentos
              enviados directamente en su bandeja de entrada todos los meses
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className='rounded-lg px-2 py-3 w-96 mr-1 focus:outline-none placeholder:text-gray-600'
                type='text'
                placeholder='Dirección de correo electrónico'
              />
              <button className='bg-blue-700 rounded-lg px-8 py-3 font-bold text-white hover:bg-blue-600'>
                Suscribir
              </button>
            </form>
          </div>
        </div>
        {/* center */}
        <div className=''>
          <ul className='text-gray-300  '>
            <h3 className='text-lg font-bold'>Menú</h3>
            <li className=''>
              <Link
                to='/'
                className='text-gray-600 text-lg hover:text-gray-400'
              >
                Inicio
              </Link>
            </li>
            <li className=''>
              <Link
                to='category'
                className='text-gray-600 text-lg hover:text-gray-400'
              >
                Categorias
              </Link>
            </li>
            <li className=''>
              <Link
                to='contact'
                className='text-gray-600 text-lg hover:text-gray-400'
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        {/* right */}
        <div className=''>
          <ul className='text-gray-300'>
            <h3 className='text-xl font-bold'>Categorias</h3>
            <li className=''>
              <Link className='text-gray-600 text-lg hover:text-gray-400' to=''>
                Todo
              </Link>
            </li>
            <li className=''>
              <Link
                className=' text-gray-600 text-lg hover:text-gray-400'
                to=''
              >
                Mujer
              </Link>
            </li>
            <li className=''>
              <Link className='text-gray-600 text-lg hover:text-gray-400' to=''>
                Hombre
              </Link>
            </li>
            <li className=''>
              <Link className='text-gray-600 text-lg hover:text-gray-400' to=''>
                Accesorios
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h4 className='pb-6 pt-6 text-gray-500 text-center border-t border-gray-800 font-medium'>
        © 2021 <span className='uppercase'>marlos'tore</span>. Desarrollado por
        MarlonSuyuc.
      </h4>
    </footer>
  )
}

export default Footer
