import { useState } from 'react'
import { useEffect } from 'react'
import { New } from './New'

export const NewsContainer = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://localhost:3001/v1/news', {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(() => window.location.href = '/login')
      console.log(news);
  }, [])
  return <>
    { news.reverse().map(item => <New
        key={item.id}
        title={item.title}
        body={item.body}
        date={item.createdAt}
      />)
    }
  </>
}
