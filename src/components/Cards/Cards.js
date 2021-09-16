import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import classes from './Cards.module.css'

import CardItem from './CardItem'
import Button from '../../UI/Button/Button'
import Loading from '../../UI/Loading/Loading'
import HttpError from '../../UI/Error/HttpError'
import Template from '../../UI/Template/Template'

const Cards = ({ type, path, category }) => {
  const [books, setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [httpError, setHttpError] = React.useState(false)
  const darkmode = useSelector(store => store.darkmode.toggle)

  const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'
  React.useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${key}`
      )
      .then(response => {
        setBooks(response.data.results.books)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        setHttpError(true)
      })
  }, [category])

  const cards = (
    <React.Fragment>
      <Template className={classes['header-menu']}>
        <h1 className={classes.heading}>{type}</h1>
        <Link to={`/books/${path}`}>
          <Button
            className={
              darkmode
                ? `${classes.button} ${classes['button-dark']}`
                : classes.button
            }>
            see more
          </Button>
        </Link>
      </Template>
      <Template>
        {books.slice(0, 4).map((book, index) => (
          <CardItem
            bookId={index}
            key={book.title}
            price={book.price}
            title={book.title}
            author={book.author}
            image={book.book_image}
          />
        ))}
      </Template>
    </React.Fragment>
  )

  return (
    <div
      className={
        darkmode
          ? `${classes['card-container']} ${classes.dark}`
          : classes['card-container']
      }>
      {loading && !httpError && <Loading />}
      {!loading && !httpError && cards}
      {!loading && httpError && <HttpError>No information found...</HttpError>}
    </div>
  )
}

export default Cards
