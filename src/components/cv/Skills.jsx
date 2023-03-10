import cvData from '../../assets/cvData.json'

export function Skills({lang}) {
  
  return cvData.skills.list.map((element) => (
    <article key={element.type.es} className='flex'>
      <h3 className='font-bold uppercase text-gray-600 mr-3'>{element.type[lang]}</h3>
      <ul className='flex gap-x-3'>
        {
          element.list.join(' · ')
        }
      </ul>
    </article>
  ))
}
