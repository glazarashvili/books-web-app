import React from 'react'
import axios from 'axios'

import Template from '../../UI/Template/Template'

import CardItem from './CardItem'
import Button from '../../UI/Button/Button'

import classes from './Cards.module.css'

const categories = [
  'sports',
  'humor',
  'animals',
  'crime-and-punishment',
  'education',
  'hardcover-fiction',
  'business-books',
  'expeditions-disasters-and-adventures',
  'religion-spirituality-and-faith',
  'travel',
]

// const arr = [
//   {
//     title: '1984',
//     author: 'Leo Tolstoy',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8Tq-_rEZrRX0JPqc4V4haxcGFiNo_fXt-w&usqp=CAU',
//     price: '9.99GEL',
//   },
//   {
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpletuK4COjTj93pq9XyJLsloD1dQtYfbqQ&usqp=CAU',
//     price: '9.99GEL',
//   },
//   {
//     title: 'Madame Bovary',
//     author: 'George Orweell',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuVghZhAraKxE123BJqxscxPLNW2mUC64vQ&usqp=CAU',
//     price: '9.99GEL',
//   },
//   {
//     title: 'War and Peace',
//     author: 'Vladimir Nabokov',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDH6qP1vkKXBRa0kYA5esSkmVWtcZHCkFRg&usqp=CAU',
//     price: '9.99GEL',
//   },
//   {
//     title: 'BoThe Great Gatsby',
//     author: 'George Eliot',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff-VFyyXEDN7_TyMhziFuFfz_o6mHG2GtQA&usqp=CAU',
//     price: '9.99GEL',
//   },
// ]

const Cards = ({ type }) => {
  const [books, setBooks] = React.useState([])

  const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'
  React.useEffect(() => {
    axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/current/culture.json?api-key=' +
          key
      )
      .then(response => {
        console.log(response.data.results.books)
        setBooks(response.data.results.books)
      })
  }, [])

  const items = books.slice(4, 9).map(book => {
    return (
      <CardItem
        key={book.title}
        image={book.book_image}
        price={book.price}
        title={book.title}
        author={book.author}
      />
    )
  })

  return (
    <div className={classes['card-container']}>
      <Template className={classes['header-menu']}>
        <h1 className={classes.heading}>{type}</h1>
        <Button className={classes.button}>see more</Button>
      </Template>
      <Template>{items}</Template>
    </div>
  )
}

export default Cards
