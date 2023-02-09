import imgContact from "../../../assets/imageContact.jpg";
const Contact = () => {
  const handleSubmit = (e) => {
    // e.preventDefault()
  }
  return (
    <div className='w-full'>
      <section className='bg-gradient-to-bl from-pink-900/10 to-slate-900 w-full h-[65vh] flex flex-col justify-center gap-4 relative'>
        <img src={imgContact} alt="img-Contact" className='w-full h-full object-cover absolute mix-blend-overlay' />
        <div>
          <h3 className='font-semibold text-5xl text-white ml-10'>
            Contáctanos y obtenga nuestra ayuda
          </h3>
          <p className='text-3xl font-normal text-white ml-10'>
            Nos pondremos en contacto en breve
          </p>
        </div>
      </section>

      <section className='w-3/5  mx-auto my-16'>
        <form onSubmit={handleSubmit} className='p-4 flex flex-col  mx-auto '>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            className='outline outline-slate-50 mb-4 p-2 placeholder:text-slate-700 bg-zinc-100 rounded'
            required
          />
          <input
            type='text'
            name='apellido'
            placeholder='Apellido'
            className='outline outline-slate-50 mb-4 p-2 placeholder:text-slate-700 bg-zinc-100 rounded'
            required
          />
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Correo electrónico'
            className='outline outline-slate-100 mb-4 p-2 placeholder:text-slate-700 bg-zinc-100 rounded'
            required
          />
          <textarea
            placeholder='Mensaje'
            className='outline outline-slate-100 mb-4 p-2 min-h-[150px] placeholder:text-slate-700 bg-zinc-100 rounded'
            required
          ></textarea>
          <button className='bg-blue-700  rounded-lg w-56 py-3 font-medium hover:bg-blue-500 text-white'>
            Enviar información
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
