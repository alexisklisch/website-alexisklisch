export function New({title, body, date, link}) {
  return (
    <article className='px-4 text-center'>
      <div>
        <h2 className='font-bold text-brand-dark text-xl'>
          {title}
        </h2>
        <div className='text-xs py-1 pb-3 grid grid-cols-[2fr_1fr_2fr] justify-items-center'>
          <button
            onClick={() => alert('Funciona')}
            className='border border-brand-dark-300 rounded-full text-brand-dark w-fit px-3'
          >
            Política
          </button>
          <p className='text-brand-dark-300'>{new Date(date).toLocaleDateString()}</p>
          <a className='text-center text-brand-green'>@alexis</a>
      </div>
      </div>
      <p className='text-sm text-brand-dark-300'>
        {body}
      </p>

    </article>
  )
}
