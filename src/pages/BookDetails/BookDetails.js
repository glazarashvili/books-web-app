import React from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'

import classes from './BookDetails.module.css'
import BookDescription from './BookDescription'
import Template from '../../UI/Template/Template'

const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'

export const BookDetails = () => {
  const params = useParams()
  const location = useLocation().pathname
  const [bookDetail, setBookDetail] = React.useState([])

  const bookId = params.bookId
  const adrress = location.slice(7, location.length - 2)

  React.useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${adrress}.json?api-key=${key}`
      )
      .then(response => {
        setBookDetail(response.data.results.books[bookId])
      })
  }, [bookId, adrress])

  console.log(bookDetail)

  return (
    <div className={classes['details-page']}>
      <Template className={classes.template}>
        <div className={classes['left-menu']}>
          <img
            alt='book-detail'
            src={bookDetail.book_image}
            className={classes['left-menu_image']}
          />
        </div>
        <BookDescription
          title={bookDetail.title}
          author={bookDetail.author}
          publisher={bookDetail.publisher}
          description={bookDetail.description}
        />
      </Template>
    </div>
  )
}
