import { useState } from 'react'
import { useEffect } from 'react'
import { New } from './New'
import { apiEnvs } from "../../utils/apiEnvs"
import { ENVIRONMENT } from "../../utils/consts"

export const NewsContainer = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const apiUrl = apiEnvs(ENVIRONMENT)

    fetch(`${apiUrl}/v1/news`, {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => {
        console.log(err)
        window.location.href = '/login'
      })
  }, [])
  return <>
    { news.reverse().map(item => <New
        body={item.body}
        date={item.createdAt}
        key={item.id}
        link={item.link}
        title={item.title}
        username={item.users.username}
      />)
    }
  </>
}
