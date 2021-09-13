import React from 'react'
import axios from 'axios'

import { useParams, useLocation } from 'react-router-dom'

export const BookDetails = () => {
  const params = useParams()
  const location = useLocation().pathname
  const [bookDetail, setBookDetail] = React.useState([])

  const bookId = params.bookId

  const adrress = location.slice(7, location.length - 2)
  console.log(adrress)

  const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'
  React.useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${adrress}.json?api-key=${key}`
      )
      .then(response => {
        console.log(response.data.results.books[bookId])
        setBookDetail(response.data.results.books[bookId])
      })
  }, [bookId, adrress])

  return (
    <div>
      dddddddddddddddddddd
      <p>{bookDetail.author}</p>
      <p>{bookDetail.title}</p>
      <img src={bookDetail.book_image} alt='book-detail' />
    </div>
  )
}
