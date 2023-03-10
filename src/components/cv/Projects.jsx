import cvData from '../../assets/cvData.json'

export function Projects({lang}) {
  
  return cvData.projects.list.map((element) => (
    <article key={element.name} className='text-center flex flex-col gap-1'>
      <h3 className='bg-gray-300 py-[2px] font-bold h-fit'>{element.name}</h3>
      <h4 className='px-2'>
        {element.description[lang]}
      </h4>
      <h5 className='text-[10pt] text-gray-600 px-2 h-fit mt-auto'>
        {element.tech.join(' - ')}
      </h5>
      <a className='text-[10pt] italic h-fit' href={`https://${element.link}`} target="_blank" rel="noopener noreferrer">{element.link}</a>
    </article>
  ))
}
