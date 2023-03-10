import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Works } from './Works'
import { Projects } from './Projects'
import { Skills } from './Skills'
import cvData from './../../assets/cvData.json'

const waMsg = encodeURI('Hola, soy Alexis')


export function CvCreator() {
  const [ title, setTitle ] = useState('Full Stack Developer')
  const [ btnSelect, setBtnSelect ] = useState('')
  const [ lang, setLang ] = useState('es')

  const changeTitleHandler = e => {
    setTitle(e.target.value)
  }

  const presetHandler = e => {
    const innerText = e.target.innerText
    setTitle(innerText)
  }

  return <>
    <main
    className='max-w-4xl mx-auto pt-36 grid gap-6 place-items-center print:hidden'
  >
    <form className='grid gap-3 px-4'>
      <input
        className='text-xl px-3 py-2 rounded-md bg-brand-light-100 text-brand-dark placeholder:text-brand-dark-200 shadow shadow-brand-dark/50 hover:shadow-md focus-visible:shadow-md focus-visible:outline-none transition-shadow'
        type='text'
        placeholder='Full Stack Developer'
        onChange={changeTitleHandler}
        value={title}
      />
      <ul className='grid grid-flow-row px-6'>
        <button
          onClick={presetHandler}
          type='button'
          className={`bg-brand-dark px-3 py-2 text-brand-light rounded-md ${e => e.target.innerText === title && 'animate-spin'}`}
        >
            Frontend Developer
        </button>
      </ul>
      <div className='px-12 flex items-center justify-between min-w-full mx-auto'>
        <button
          onClick={ () => setLang(lang === 'es' ? 'en' : 'es') }
          className={`p-1 relative bg-brand-yellow w-16 h-10 rounded-full flex ${lang === 'es' ? 'justify-start' : 'justify-end'}
            before:content-["ES"] before:absolute before:-left-1/3 before:top-2 before:text-brand-dark-300
            after:content-["EN"] after:absolute after:-right-1/3 after:top-2 after:text-brand-dark-300`} type='button'>
          <span className='h-full aspect-square rounded-full bg-brand-light transition-all' />
        </button>
        <button
          onClick={() => print()}
        >Imprimir
          <span>
            <Icon icon='material-symbols:print' className='ml-2 text-3xl inline text-brand-green' />
          </span>
        </button>
      </div>
    </form>
  </main>
  <div className='w-[21cm] bg-white py-12 [-webkit-print-color-adjust:exact] hidden print:block'>
    {/* <!-- Header --> */}
    <header className='flex items-center justify-between px-6'>
      <div className='leading-7'>
        <h1 className='text-[18pt] font-bold'>{title}</h1>
        <h2 className='text-[14pt]'>Alexis Fleitas Klisch</h2>
      </div>
      <ul className='flex flex-col items-end text-[14pt]'>
        <li>
          <a
            href={`https://api.whatsapp.com/send/?phone=5491176121953&text=${waMsg}`}
          >
            +549 11 5754 0866
            <span>
              <Icon className='w-5 inline -mt-1 ml-2' icon='ic:baseline-local-phone' />
            </span>
          </a>
        </li>
        <li>
          <a href='mailto:work@alexisklisch.com'>
            work@alexisklisch.com
            <span>
              <Icon className='w-5 inline ml-2' icon='ic:round-email' />
            </span>
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/alexisklisch'>
            linkedin.com/in/alexisklisch
            <span>
              <Icon
                className='w-5 inline ml-2'
                icon='entypo-social:linkedin-with-circle'
              />
            </span>
          </a>
        </li>
        <li>
          <a href='https://github.com/alexisklisch'>
            github.com/alexisklisch
            <span>
              <Icon className='w-5 inline ml-2' icon='uil:github' />
            </span>
          </a>
        </li>
      </ul>
    </header>
    <main className='grid gap-6 text-[12pt]'>
      {/* <!-- Employement --> */}
      <section className='px-6 mt-3 grid gap-5'>
        <h2 className='text-[14pt] uppercase font-bold -mb-2'>{cvData.works[lang]}</h2>
        <Works lang={lang} />
      </section>
      {/* <!-- Projects --> */}
      <section className='px-6 mt-3'>
        <h2 className='text-[14pt] uppercase font-bold mb-2'>{cvData.projects[lang]}</h2>
        <div className='grid grid-cols-3 gap-2'>
          <Projects lang={lang} />
        </div>
      </section>
      {/* <!-- Other Skills --> */}
      <section className='px-6 mt-3'>
        <h2 className='text-[14pt] uppercase font-bold mb-1'>{cvData.skills[lang]}</h2>
        <div>
          <Skills lang={lang} />
        </div>
      </section>
    </main>
  </div>
  </>
}
