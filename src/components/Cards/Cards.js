import React from 'react'
import axios from 'axios'

import Template from '../../UI/Template/Template'

import CardItem from './CardItem'
import Button from '../../UI/Button/Button'

import classes from './Cards.module.css'

const arr = [
  {
    title: '1984',
    author: 'Leo Tolstoy',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8Tq-_rEZrRX0JPqc4V4haxcGFiNo_fXt-w&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpletuK4COjTj93pq9XyJLsloD1dQtYfbqQ&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'Madame Bovary',
    author: 'George Orweell',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuVghZhAraKxE123BJqxscxPLNW2mUC64vQ&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'War and Peace',
    author: 'Vladimir Nabokov',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDH6qP1vkKXBRa0kYA5esSkmVWtcZHCkFRg&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'BoThe Great Gatsby',
    author: 'George Eliot',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff-VFyyXEDN7_TyMhziFuFfz_o6mHG2GtQA&usqp=CAU',
    price: '9.99GEL',
  },
]

const Cards = ({ type }) => {
  React.useEffect(() => {}, [])

  const books = arr.map(book => {
    return (
      <CardItem
        key={book.title}
        image={book.img}
        title={book.title}
        price={book.price}
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
      <Template>{books}</Template>
    </div>
  )
}

export default Cards
