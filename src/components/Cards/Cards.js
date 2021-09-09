import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import classes from './Cards.module.css'

import CardItem from './CardItem'
import Button from '../../UI/Button/Button'
import Template from '../../UI/Template/Template'

// const categories = [
//   'sports',
//   'humor',
//   'animals',
//   'crime-and-punishment',
//   'education',
//   'hardcover-fiction',
//   'business-books',
//   'expeditions-disasters-and-adventures',
//   'religion-spirituality-and-faith',
//   'travel',
// ]

const Cards = ({ type, path, category }) => {
  const [books, setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'
  React.useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${key}`
      )
      .then(response => {
        console.log(response.data.results.books)
        setBooks(response.data.results.books)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
      })
  }, [category])

  const items = books
    .slice(0, 4)
    .map(book => (
      <CardItem
        key={book.title}
        price={book.price}
        title={book.title}
        author={book.author}
        image={book.book_image}
      />
    ))

  const Loading = (
    <div>
      <img src='https://saba.com.ge/content/img/Loader.gif' alt='loading-pic' />
      <p>Loading...</p>
    </div>
  )

  return (
    <div className={classes['card-container']}>
      {loading ? (
        Loading
      ) : (
        <React.Fragment>
          <Template className={classes['header-menu']}>
            <h1 className={classes.heading}>{type}</h1>
            <Link to={`/${path}`}>
              <Button className={classes.button}>see more</Button>
            </Link>
          </Template>
          <Template>{items}</Template>
        </React.Fragment>
      )}
    </div>
  )
}

export default Cards
