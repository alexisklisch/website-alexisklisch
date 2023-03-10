import cvData from '../../assets/cvData.json'

export function Works({lang}) {

  return cvData.works.list.map((element) => (
      <article key={element.bussiness}>
        <h3 className='text-center bg-gray-300 py-[2px] mb-2'>
          <strong>{element.job}</strong> · {element.bussiness} {element.date[lang]}
        </h3>
        <ul className='leading-5 grid gap-2 px-2'>
          {element.tasks[lang].map(task => (
            <li key={task}><p>{task}</p></li>
          ))}
        </ul>
      </article>
    )
  )
}
